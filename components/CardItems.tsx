"use client";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

export default function CardItems() {
  return (
    <div className="p-4 my-8">
      <h1 className="text-4xl font-bold text-center text-[#102c4d] mb-8">
        Idealne rozwiązanie dla małych startupów
      </h1>
      <div style={container}>
        {mockupData.map(([id, label, title, description]) => (
          <Card
            id={id}
            label={label}
            title={title}
            description={description}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}

type MockupItem = {
  id: number;
  label: string;
  title: string;
  description: string;
};
function Card({ id, label, title, description }: MockupItem) {
  const background = "#102c4d";

  return (
    <motion.div
      className={`card-container-${id}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <h1>{label}</h1>
        <h2>{title}</h2>
        <span>{description}</span>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const container: React.CSSProperties = {
  margin: "2rem auto",
  maxWidth: 1440,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -120,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  marginInline: "auto",
  clipPath: `path("M 0 339 C 3 308 54 247 139 232 L 898 134 C 1138 101 1125 175 1155 217 L 1209 419 C 553 450 491.046 450 477 451 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  textAlign: "center",
  width: "80%",
  padding: "2rem",
  height: 400,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

const mockupData: [number, string, string, string][] = [
  [
    1,
    "Zarządzanie projektami i współpraca",
    "Wszystkie projekty w jednym miejscu",
    "Twórz nieograniczoną liczbę projektów, organizuj zadania w tablice Kanban, przypisuj zadania członkom zespołu i komunikuj się w kontekście konkretnych tasków.",
  ],
  [
    2,
    "Sprinty, tablice i analityka",
    "Agile dla małych zespołów",
    "Planuj sprinty, używaj tablic Scrum/Kanban, śledź velocity team i burndown charty - wszystko czego potrzebujesz do zarządzania produktywnością.",
  ],
  [
    3,
    "Powiadomienia i prosty cennik",
    "Idealne dla startupów",
    "Otrzymuj powiadomienia o zmianach w zadaniach i deadlinach. Bez ukrytych kosztów - płać tylko za aktywnych użytkowników.",
  ],
];
