"use client";

import { SetStateAction, useState } from "react";

export default function ToggleFrontPage() {
  const [view, setView] = useState("page");
  const viewSwitchers = [
    { view: "page", label: "Strona" },
    { view: "board", label: "Tablice" },
    { view: "management", label: "Zarządzanie" },
  ];

  const viewContent = [
    {
      view: "page",
      text:
        "Witaj w TaskFlow. To proste narzędzie do zarządzania projektami oparte na Next.js. " +
        "W tym widoku zobaczysz szybki przegląd swoich aktywnych projektów oraz najważniejszych zadań wymagających działania. " +
        "Możesz rozpocząć pracę od utworzenia nowej tablicy Kanban albo przejść do sekcji Zarządzanie, aby skonfigurować zespoły i role.",
    },
    {
      view: "board",
      text:
        "Tablice Kanban to podstawowy element TaskFlow. Przełączaj się między różnymi widokami projektów: klasycznym Kanbanem, widokiem listy lub wykresem Gantta. " +
        "Twórz zadania, przeciągaj je między kolumnami i zmieniaj ich status w zależności od etapu pracy. " +
        "Każda tablica umożliwia filtrowanie według priorytetu, przypisywanie użytkowników oraz określanie szacowanego czasu realizacji.",
    },
    {
      view: "management",
      text:
        "Sekcja Zarządzanie daje pełną kontrolę nad strukturą projektu. " +
        "Możesz konfigurować zespoły, przypisywać role (np. Administrator, Deweloper, Tester) i ustalać poziomy dostępu do poszczególnych projektów. " +
        "Znajdziesz tu także raporty postępu, takie jak Burndown Chart, oraz ustawienia globalne dotyczące typów zadań i statusów. " +
        "To miejsce do utrzymania porządku i organizacji pracy w całym projekcie.",
    },
  ];

  function switchView(newView: string) {
    setView(newView);
  }

  const getCurrentContent = () => {
    const content = viewContent.find((item) => item.view === view);
    return content ? content.text : "Wybierz opcję z menu powyżej.";
  };

  return (
    <div className="p-4 my-8">
      <div className="flex space-x-4 border-b pb-2 mb-4 justify-center">
        {viewSwitchers.map((switcher) => (
          <div
            key={switcher.view}
            onClick={() => switchView(switcher.view)}
            className={`cursor-pointer px-4 py-2 rounded-t-lg transition-colors duration-300 ${
              view === switcher.view
                ? "bg-[#102c4d] text-white font-semibold shadow-lg"
                : "text-[#102c4d] hover:bg-gray-200"
            }`}
          >
            {switcher.label}
          </div>
        ))}
      </div>

      <div className="p-4">
        <p className="whitespace-pre-wrap text-gray-700">
          {getCurrentContent()}
        </p>
      </div>
    </div>
  );
}
