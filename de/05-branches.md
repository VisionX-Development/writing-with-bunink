---

title: Branches: Fassungen eines Textes

chapter: 5

slug: branches

slug_en: branches

description: Wie du eine Fassung eines Textes parallel zum Hauptstand entwickelst und sie später zusammenführst.

lang: de

status: draft

updated: 2026-08-21

---

# Branches: Fassungen eines Textes

Manchmal willst du etwas ausprobieren, ohne den bestehenden Text anzutasten. Ein Branch ist genau das: eine zweite Fassung, die parallel läuft, bis du entscheidest, ob sie die richtige war.

## Was ein Branch ist

Ein Branch ist ein Abzweig. Du nimmst den aktuellen Stand deines Repositorys, gibst ihm einen Namen und arbeitest von da an in dieser Kopie weiter. Der Hauptstand bleibt unberührt.

Dieser Hauptstand hat auch einen Namen; bei den meisten Repositories heisst er `main`. In bun.ink ist er der **Default-Branch**.

Für Schreibende ist das der praktische Nutzen: Du kannst ein Kapitel radikal umschreiben, eine zweite Erzählperspektive testen, eine gekürzte Fassung für eine andere Publikation anlegen — alles gleichzeitig, alles nachvollziehbar, ohne Dateinamen wie `kapitel-3-neu-final-2.md`.

## Einen Branch anlegen

Im GitHub-Bereich der Seitenleiste legst du über **Branch erstellen** einen an. Der neue Branch entsteht aus dem Branch, auf dem du gerade bist.

Beim Namen ist Git streng, und bun.ink sagt dir vorher, was nicht geht:

- Keine Leerzeichen. Nimm einen Bindestrich oder Unterstrich, etwa `version-2`.
- Nicht erlaubt sind ausserdem die Zeichen `~ ^ : ? * [ \`.
- Kein `..` im Namen, kein `-` oder `.` am Anfang, kein `/` oder `.` am Ende, keine Endung `.lock`.

Ein guter Name sagt, wofür der Branch da ist: `kuerzung-fuer-magazin`, `perspektive-ich`, `lektorat-runde-2`.

## Auf einem Branch arbeiten

Sobald du auf einem anderen Branch als dem Hauptbranch bist, zeigt bun.ink das deutlich an: ein **Branch-Modus**-Abzeichen und ein Hinweis, welcher Branch gerade bearbeitet wird.

Der Hinweis ist wichtig, und deshalb steht er hier noch einmal ausführlich: **Was du auf einem Branch schreibst, wird nicht in bun.ink gespeichert.** In der bun.ink-Datenbank liegt nur der Hauptbranch. Alles andere existiert allein in deinem Browser, bis du es mit **Auf Branch speichern** nach GitHub schreibst.

Daraus folgen zwei Einschränkungen, die dir im Branch-Modus begegnen:

- Ordner und Dokumente kannst du nur auf dem Hauptbranch anlegen, umbenennen, verschieben oder löschen. Die Struktur wird in bun.ink verwaltet, und dorthin schreibt der Branch-Modus nicht.
- Der Versionsverlauf eines Dokuments ist ebenfalls nur auf dem Hauptbranch verfügbar.

Speichere deshalb auf einem Branch früher und öfter, als du es gewohnt bist.

## Zwischen Branches wechseln

Über die Branch-Liste wechselst du zu einem anderen Branch. bun.ink lädt dessen Dateien aus GitHub und zeigt dir diesen Stand — pro Projekt ist immer genau ein Branch aktiv.

Hast du ungespeicherte Änderungen, fragt bun.ink vorher nach: speichern, verwerfen oder abbrechen. Es wird nichts stillschweigend überschrieben. Auf einem Branch ist «verwerfen» endgültig, weil diese Änderungen nirgends sonst liegen.

Mit **Branches neu laden** holst du die Liste frisch von GitHub, falls dort jemand anderes einen Branch angelegt hat.

## Wenn GitHub den Branch verändert hat

Arbeitest du an einem Branch, während er auf GitHub weiterläuft — durch dich an einem anderen Gerät oder durch jemand anderen —, meldet bun.ink einen **Konflikt**.

Du hast zwei Wege:

- **Änderungen zusammenführen** behält deine Bearbeitungen und nimmt die neuen dazu. Das ist der normale Weg.
- **Branch neu laden** ersetzt deinen Stand durch den aus GitHub. Deine noch nicht gespeicherten Änderungen sind damit weg; bun.ink fragt vorher deutlich nach.

## In main zusammenführen und aufräumen

Ist die Fassung fertig, führst du sie mit **In main mergen** in den Hauptstand zurück. Danach ist sie kein Abzweig mehr, sondern der reguläre Text.

Zwei Bedingungen dafür:

1. Der Branch muss gespeichert sein. Ungespeicherte Änderungen liegen nur in deinem Browser und wären beim Zusammenführen nicht dabei — bun.ink weist dich darauf hin.
2. Die Zusammenführung muss automatisch möglich sein. Haben beide Seiten dieselbe Stelle verändert, bricht bun.ink ab und bittet dich, den Branch neu zu laden und die Unterschiede zu prüfen, bevor du es erneut versuchst.

Über **Zu main zurückkehren** verlässt du den Branch-Modus wieder.

Branches, die du nicht mehr brauchst, kannst du löschen. Lies die Rückfrage genau: Der gesamte Inhalt dieses Branches auf GitHub geht dauerhaft verloren, und das lässt sich nicht rückgängig machen. Den Standard-Branch schützt bun.ink — er lässt sich nicht löschen.