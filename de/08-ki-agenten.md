---

title: KI-Agenten auf deinen Texten

chapter: 8

slug: ki-agenten

slug\_en: ai-agents

description: Wie ein KI-Agent dein Repository liest, Änderungen vorschlägt und wie du entscheidest, was davon in deinen Text kommt.

lang: de

status: draft

updated: 2026-09-21

---

# KI-Agenten auf deinen Texten

Weil deine Texte in einem Repository liegen, kann eine Software daran arbeiten, die nicht du bist: ein KI-Agent, der liest, was da steht, und Änderungen vorschlägt. Dieses Kapitel zeigt, wie so ein Agent an deine Texte kommt, wie du ihm einen Auftrag gibst und wie du sein Ergebnis prüfst, bevor davon irgendetwas in deiner Fassung landet.

## Was ein Agent ist — und was er nicht ist

Ein KI-Agent ist ein Programm mit einem Sprachmodell dahinter, das nicht nur antwortet, sondern arbeitet: Es öffnet die Dateien in deinem Repository, liest sie, ändert etwas, legt einen Branch an und öffnet einen Pull Request. Was danach passiert, entscheidest du — genau wie beim Lektorat in Kapitel 7.

Der Unterschied zu einem Chatfenster ist der Zugriff. Ein Chat sieht das, was du hineinkopierst. Ein Agent sieht dein Repository und kann darin schreiben. Das macht ihn nützlich für Arbeiten, die den ganzen Text betreffen — und es ist der Grund, warum du ihm nicht dieselbe Freiheit gibst wie dir selbst.

Drei Dinge, die ein Agent hier ausdrücklich nicht ist:

- **Kein Mitautor.** Er schlägt vor, er übernimmt nicht. Der Merge liegt bei dir.

- **Kein Gedächtnis.** Jeder Auftrag beginnt bei null. Was der Agent über dein Projekt wissen soll, muss im Repository stehen (siehe **Hausregeln aufschreiben** weiter unten).

- **Keine zweite Meinung mit Verantwortung.** Er behauptet Dinge auch dann flüssig, wenn sie nicht stimmen. Bei Fakten, Zitaten und Namen prüfst du selbst.

## Wofür sich ein Agent lohnt

Gut geeignet sind Aufgaben, die nach Sorgfalt statt nach Einfällen verlangen und sich an vielen Stellen gleichzeitig abspielen:

- Rechtschreibung, Zeichensetzung und Tippfehler über alle Kapitel hinweg.

- Konsistenz: heisst die Figur überall gleich, ist die Anrede durchgehend «du», stimmen die Schreibweisen von Orten und Titeln.

- Wiederholungen finden — Formulierungen, die dreimal vorkommen, ohne dass es dir aufgefallen ist.

- Struktur prüfen: Überschriftenebenen, Reihenfolge, Verweise, die ins Leere zeigen.

- Ein Exposé, eine Inhaltsangabe oder eine Kapitelübersicht aus dem vorhandenen Text ziehen.

Schlecht geeignet ist alles, was deine Stimme ausmacht. Ein Agent, der einen Absatz «schöner» schreiben soll, liefert zuverlässig einen Absatz, der nach niemandem klingt. Je enger der Auftrag, desto brauchbarer das Ergebnis.

## Einen Agenten an dein Repository lassen

Der Agent kommt nicht über [bun.ink](http://bun.ink) an deine Texte, sondern über GitHub. Für dich heisst das: Du gibst ihm Zugriff auf das Repository, das mit deinem Projekt verknüpft ist, und danach arbeitet er dort, während du in [bun.ink](http://bun.ink) weiterschreibst.

Wie der Zugriff eingerichtet wird, hängt vom Anbieter ab — die meisten Agenten installieren sich als GitHub-App oder verbinden sich mit deinem GitHub-Konto, so wie [bun.ink](http://bun.ink) es in Kapitel 4 tut. Unabhängig vom Anbieter gelten drei Regeln:

1. **Gib Zugriff auf genau ein Repository**, nicht auf alle. GitHub fragt bei der Installation, welche Repositories eine App sehen darf.

2. **Lass den Agenten auf einem eigenen Branch arbeiten.** Direkt auf `main` schreibt niemand ausser dir — auch kein Agent.

3. **Nimm einen Agenten, der Pull Requests öffnet.** Dann bekommst du das Ergebnis in der Form, die du aus Kapitel 7 schon kennst, statt als fertige Tatsache.

Was der Agent dabei sieht, ist der gesamte Inhalt des Repositorys, und er schickt Teile davon an den Sprachmodell-Anbieter, für den er arbeitet. Bei einem privaten Repository verlässt dein Text damit trotzdem dein Konto. Texte, die das nicht dürfen, gehören in einen verschlüsselten Bereich (Kapitel 9) oder in ein Projekt ohne Agenten.

## Einen Auftrag formulieren

Ein Auftrag an einen Agenten ist kein Prompt im Sinne von «schreib mir etwas», sondern eine Arbeitsanweisung mit Umfang, Ziel und Grenze. Was in der Praxis funktioniert:

- **Sag, welche Dateien gemeint sind.** «Kapitel 3 bis 5» ist ein Auftrag, «der Roman» ist eine Einladung zum Durcheinander.

- **Sag, was nicht angefasst werden soll.** Dialoge, Zitate, die Kapitelüberschriften — nenne es ausdrücklich, sonst gilt alles als Freiwild.

- **Eine Aufgabe pro Auftrag.** Rechtschreibung *und* Kürzen *und* Struktur ergeben einen Pull Request, den du nicht mehr sinnvoll durchgehen kannst.

- **Verlange kleine Vorschläge.** Zehn einzelne Änderungen kannst du annehmen oder verwerfen; ein neu geschriebenes Kapitel kannst du nur ganz oder gar nicht nehmen.

- **Lass dich fragen.** Ein guter Auftrag endet mit: Wenn etwas unklar ist, schreib es in den Pull Request, statt zu raten.

Ein brauchbarer Auftrag klingt also eher so: «Lies `kapitel-03.md` bis `kapitel-05.md`. Korrigiere Rechtschreibung und Zeichensetzung. Ändere keine Formulierungen und keine Dialoge. Leg einen Branch an, committe pro Kapitel einmal und öffne einen Pull Request auf `main`.»

## Das Ergebnis prüfen

Wenn der Agent fertig ist, liegt seine Arbeit als Pull Request auf deinem Branch — und damit im selben Ablauf wie eine Überarbeitung durch einen Menschen. In [bun.ink](http://bun.ink) steht in der Seitenleiste, dass eine Überarbeitung vorliegt; du gehst sie Stelle für Stelle durch oder als Ganzes im Merge-Fenster. Wie das genau funktioniert, steht in Kapitel 7.

Beim Durchgehen lohnt sich ein anderer Blick als beim Lektorat eines Menschen. Achte besonders auf:

- **Stille Änderungen.** Ein Agent «verbessert» gern nebenbei etwas, wonach niemand gefragt hat. Jeder Block, der nicht zum Auftrag gehört, wird verworfen — auch wenn er gut aussieht.

- **Erfundene Sicherheit.** Namen, Jahreszahlen, Zitate und Querverweise prüfst du an der Quelle, nicht am Vorschlag.

- **Umfang.** Ein Pull Request mit dreissig Blöcken über zehn Dateien ist ein Zeichen, dass der Auftrag zu weit war. Schliess ihn und stell die Aufgabe enger.

- **Deine Stimme.** Wenn ein Satz danach korrekter und langweiliger ist, war es keine Verbesserung.

Verworfene Stellen und eigene Gegenfassungen schreibt [bun.ink](http://bun.ink) an den Pull Request zurück. Beim Agenten hat das keinen erzieherischen Effekt — er lernt daraus nichts für das nächste Mal. Was er dauerhaft wissen soll, gehört deshalb ins Repository.

## Hausregeln aufschreiben

Damit du nicht bei jedem Auftrag dieselben Vorgaben wiederholst, legst du sie als Datei in dein Repository. Üblich ist eine `AGENTS.md` im obersten Ordner; viele Agenten lesen sie von sich aus, und wo das nicht der Fall ist, verweist du im Auftrag darauf.

Hineingehört, was ein neuer Mitarbeiter am ersten Tag wissen müsste:

- Worum es in dem Projekt geht und wer es liest.

- Welche Dateien der Text sind und welche nur Beiwerk.

- Die Regeln, die dir wichtig sind: Anrede, Zeitform, Schreibweisen, was auf keinen Fall geändert wird.

- Wie gearbeitet wird: eigener Branch, ein Thema pro Pull Request, Rückfragen statt Vermutungen.

Dieses Handbuch macht es genauso — die Regeln, nach denen daran gearbeitet wird, stehen im Repository und gelten für Menschen und Agenten gleichermassen.
