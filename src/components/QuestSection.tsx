import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "./ui/Container";
import { useTypewriter } from "../hooks/useTypewriter";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  questData,
  breadcrumbLabel,
  type NodeId,
  type QuestNode,
} from "../data/questData";
import {
  fadeUpVariants,
  staggerContainerVariants,
  slideUpVariants,
} from "../utils/animationVariants";

// ─── QuestDialogue ────────────────────────────────────────────────────────────

interface QuestDialogueProps {
  text: string;
  onComplete: () => void;
  reduced: boolean;
}

function QuestDialogue({ text, onComplete, reduced }: QuestDialogueProps) {
  const { displayText } = useTypewriter(
    text,
    28,
    0,
    reduced ? undefined : onComplete,
  );

  // If reduced motion, fire onComplete synchronously on first render via effect
  // (handled by passing undefined — caller should check reduced and call immediately)

  return (
    <div className="min-h-[5rem] mb-8">
      <p className="font-mono text-base md:text-lg text-white/80 leading-relaxed">
        {reduced ? text : displayText}
        {!reduced && displayText.length < text.length && (
          <span className="quest-cursor ml-0.5 text-white/40">▊</span>
        )}
      </p>
    </div>
  );
}

// ─── QuestChoices ─────────────────────────────────────────────────────────────

interface QuestChoicesProps {
  node: QuestNode;
  visible: boolean;
  onChoose: (next: string) => void;
  reduced: boolean;
}

function QuestChoices({ node, visible, onChoose, reduced }: QuestChoicesProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (next: string, label: string) => {
    if (selected) return;
    setSelected(label);
    setTimeout(() => onChoose(next), reduced ? 0 : 320);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.ul
          key={node.id + "-choices"}
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
          className="space-y-3 w-full"
        >
          {node.choices.map((choice, i) => (
            <motion.li key={choice.label} custom={i} variants={slideUpVariants}>
              <button
                onClick={() => handleSelect(choice.next, choice.label)}
                disabled={!!selected}
                className={[
                  "w-full text-left px-5 py-3.5 rounded-lg border font-mono text-sm tracking-wide",
                  "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                  selected === choice.label
                    ? "border-white text-white font-semibold scale-[0.97]"
                    : "border-white/10 text-white/50 hover:border-white/40 hover:text-white hover:font-medium",
                  selected && selected !== choice.label ? "opacity-20" : "",
                ].join(" ")}
              >
                <span className="text-white/30 mr-3 text-xs">
                  {String.fromCharCode(65 + i)}.
                </span>
                {choice.label}
              </button>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

// ─── QuestOutcome (contact form) ──────────────────────────────────────────────

interface QuestOutcomeProps {
  reduced: boolean;
}

function QuestOutcome({ reduced }: QuestOutcomeProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onCompleteCalled = useRef(false);
  const [choicesVisible, setChoicesVisible] = useState(false);

  const handleComplete = useCallback(() => {
    if (onCompleteCalled.current) return;
    onCompleteCalled.current = true;
    setChoicesVisible(true);
  }, []);

  const { displayText } = useTypewriter(
    questData.NODE_CONTACT.npc,
    28,
    0,
    reduced ? undefined : handleComplete,
  );

  // Reduced motion: show form immediately
  const showForm = reduced || choicesVisible;

  const inputClass =
    "w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors";

  return (
    <div>
      <p className="font-mono text-base md:text-lg text-white/80 leading-relaxed mb-8">
        {reduced ? questData.NODE_CONTACT.npc : displayText}
        {!reduced && displayText.length < questData.NODE_CONTACT.npc.length && (
          <span className="quest-cursor ml-0.5 text-white/40">▊</span>
        )}
      </p>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            variants={fadeUpVariants}
            initial="hidden"
            animate={showForm ? "visible" : "hidden"}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className={inputClass + " resize-none"}
            />
            <button
              type="submit"
              className="w-full border border-white/20 text-white font-mono text-xs py-3.5 rounded-lg hover:bg-white hover:text-neutral-950 transition-colors duration-200 tracking-[0.25em] uppercase"
            >
              Send it →
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="py-8 text-center"
          >
            <p className="font-mono text-sm text-white/50 tracking-wide">
              ✓ Quest complete. Expect a reply within 24 hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── QuestEngine ──────────────────────────────────────────────────────────────

function QuestEngine() {
  const reduced = useReducedMotion();
  const [currentId, setCurrentId] = useState<NodeId>("START");
  const [breadcrumb, setBreadcrumb] = useState<NodeId[]>(["START"]);
  const [choicesVisible, setChoicesVisible] = useState(reduced);
  const [dialogueKey, setDialogueKey] = useState(0);
  const onCompleteCalled = useRef(false);

  const currentNode = questData[currentId];

  const handleDialogueComplete = useCallback(() => {
    if (onCompleteCalled.current) return;
    onCompleteCalled.current = true;
    if (!currentNode.isOutcome) setChoicesVisible(true);
  }, [currentNode]);

  const handleChoice = useCallback(
    (next: string) => {
      if (next === "SCROLL_PROJECTS" || next === "SCROLL_PROJECTS_HIGHLIGHT") {
        document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
        return;
      }
      const nextId = next as NodeId;
      setChoicesVisible(false);
      setTimeout(
        () => {
          onCompleteCalled.current = false;
          setCurrentId(nextId);
          setBreadcrumb((prev) => [...prev, nextId]);
          setDialogueKey((k) => k + 1);
          if (reduced) setChoicesVisible(true);
        },
        reduced ? 0 : 280,
      );
    },
    [reduced],
  );

  return (
    <div className="max-w-2xl mx-auto border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm bg-white/[0.02]">
      {/* Breadcrumb trail */}
      <div className="mb-8 flex flex-wrap gap-1 items-center min-h-[1.25rem]">
        {breadcrumb.map((id, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="font-mono text-[10px] text-white/25 uppercase tracking-[0.2em]">
              {breadcrumbLabel[id]}
            </span>
            {i < breadcrumb.length - 1 && (
              <span className="text-white/15 text-[10px]">›</span>
            )}
          </span>
        ))}
      </div>

      {/* Dialogue area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={dialogueKey}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {currentNode.isOutcome ? (
            <QuestOutcome reduced={reduced} />
          ) : (
            <>
              <QuestDialogue
                text={currentNode.npc}
                onComplete={handleDialogueComplete}
                reduced={reduced}
              />
              <QuestChoices
                node={currentNode}
                visible={choicesVisible}
                onChoose={handleChoice}
                reduced={reduced}
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Public export ────────────────────────────────────────────────────────────

export const QuestSection = () => {
  return (
    <section
      id="quest"
      aria-label="Hire Favour Falola"
      className="min-h-screen bg-neutral-950 py-24 md:py-28 flex flex-col justify-center"
    >
      <Container className="max-w-4xl">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <motion.div
            variants={fadeUpVariants}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/30">
              QUEST_001 / Hire the Engineer
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight leading-none"
          >
            Find your engineer.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <QuestEngine />
        </motion.div>
      </Container>
    </section>
  );
};


