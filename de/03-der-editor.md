---

title: Der Editor

chapter: 3

slug: der-editor

slug_en: the-editor

description: Wie du im Editor schreibst, formatierst, speicherst und mit Snippets schneller wirst.

lang: de

status: draft

updated: 2026-08-21

---



# **Der Editor**

Der Editor ist die Fläche, auf der du tatsächlich schreibst. Dieses Kapitel zeigt, wie du formatierst, mit mehreren Dokumenten gleichzeitig arbeitest, speicherst und siehst, was du geändert hast.

## Schreiben mit Markdown

Was du siehst, ist formatierter Text. Was gespeichert wird, ist Markdown — eine schlichte Textform, in der Formatierung durch Zeichen im Text ausgedrückt wird. Du musst Markdown nicht können; du profitierst nur davon, dass deine Texte später überall lesbar bleiben.

Am schnellsten formatierst du direkt beim Tippen. `#` am Zeilenanfang macht eine Überschrift, `##` eine der zweiten Ebene. `-` beginnt eine Aufzählung, `1.` eine nummerierte Liste, `>` ein Zitat. Sternchen um ein Wort machen es kursiv, doppelte Sternchen fett.

Wenn dir das zu viel Syntax ist: Markier eine Textstelle, und über der Auswahl erscheint eine kleine Leiste mit **Fett**, **Kursiv**, **Durchgestrichen**, **Inline-Code**, **Überschrift 1** bis **Überschrift 3**, **Aufzählung**, **Nummerierte Liste** und **Zitat**. Dieselben Befehle liegen im **Format**-Knopf in der Werkzeugleiste.

Unterstreichen findest du nicht. Markdown kennt es nicht, und bun.ink bietet nichts an, was es beim Speichern wieder verlieren würde.

Die Leiste über der Auswahl lässt sich abschalten, wenn sie dich stört — in den Einstellungen unter **Editor**, bei **Formatierungs-Bubble**.

## Mehrere Dokumente in Tabs

Jedes geöffnete Dokument bekommt einen Tab. Du kannst also am Kapitel schreiben, während die Recherchenotizen daneben offen sind, und mit einem Klick wechseln.

**Neues Dokument** legt eines an und öffnet es gleich. **Tab schließen** schliesst das aktuelle, **Alle Tabs schließen** räumt auf. Sind es mehr Tabs, als in die Zeile passen, kannst du die Leiste nach links und rechts scrollen.

Auf dem Handy zeigt bun.ink statt der Tab-Leiste eine kompaktere Auswahl — der Editor selbst funktioniert genauso.

## Speichern

Gespeichert wird auf Tastendruck: standardmässig Strg+S, auf dem Mac Cmd+S. Das Kürzel kannst du in den Einstellungen unter **Editor** bei **Speichern-Shortcut** auf etwas anderes legen.

Solange ein Dokument ungespeicherte Änderungen hat, ist sein Tab markiert. Versuchst du, die Seite zu verlassen, warnt bun.ink dich vorher.

Manchmal meldet der Editor, dass dasselbe Dokument inzwischen an anderer Stelle gespeichert wurde — etwa in einem zweiten Browserfenster. Dann hast du die Wahl: **Trotzdem überschreiben** ersetzt die andere Fassung durch deine, und die andere ist weg. **Lokale Version sichern** legt deinen Text als Konfliktversion in den Verlauf; dabei geht nichts verloren, und du kannst später in Ruhe vergleichen. Die zweite Variante ist die empfohlene.

Ein Dokument darf rund 1 MB Text fassen — genug für ein sehr langes Buch. Kommst du in die Nähe, meldet bun.ink das rechtzeitig und schlägt vor, im nächsten Dokument weiterzuschreiben. Überschreitest du die Grenze, verweigert bun.ink das Speichern; dein Text bleibt im Editor stehen, bis du ihn aufgeteilt hast.

## Änderungen sehen

Der Explorer-Modus **Änderungen** zeigt dir, was du seit dem letzten gespeicherten Stand geändert hast. Ergänzungen und Löschungen sind hervorgehoben.

Zwei Ansichten stehen zur Wahl: **Inline** zeigt beide Stände ineinander, **Side-by-Side** nebeneinander. Was besser ist, hängt vom Bildschirm ab und davon, wie gross die Änderung ist.

Hast du nichts geändert, sagt die Ansicht genau das. Sie ist damit auch ein schneller Weg, um vor dem Schliessen zu prüfen, ob noch etwas offen ist.

## Zen-Modus

Der Zen-Modus räumt alles weg ausser deinem Text. Du startest ihn über **Zen** in der Werkzeugleiste oder über das Tastenkürzel, das du in den Einstellungen festlegst.

Drei Regler passen die Ansicht an: **Textgröße**, **Transparenz** und **Aktuelle Zeile zentriert halten**. Das Letzte lässt den Text unter dem Cursor durchlaufen, statt den Cursor nach unten wandern zu lassen — die Zeile, an der du schreibst, bleibt in der Mitte.

Dazu kommt die Stealth-Taste: eine Taste deiner Wahl, die den Text sofort ganz verbirgt oder wieder halb sichtbar macht. Praktisch, wenn jemand an deinen Schreibtisch tritt. Du legst sie in den Einstellungen unter **Editor** fest.

**Zurück** bringt dich in die normale Ansicht.

## Snippets und Sprungmarken

Snippets sind Textbausteine, die du über ein kurzes Kürzel einfügst — für Standardformulierungen, Absender, wiederkehrende Fragenkataloge.

Du verwaltest sie auf der Seite **Snippets**. **Neues Snippet** braucht einen **Titel**, ein **Kürzel**, optional eine **Gruppe** und den **Textbaustein** selbst. Gruppen sortieren die Sammlung, und über die Suche findest du ein Snippet nach Titel, Kürzel oder Inhalt.

Im Editor tippst du das Kürzel und drückst die Leertaste. Das Kürzel verschwindet, der Baustein steht da.

Damit ein Baustein nicht bei jedem Einsatz nachbearbeitet werden muss, kannst du Sprungmarken hineinsetzen — Platzhalter in geschweiften Klammern, etwa `{Name}`. Mit Tab springst du zur nächsten Marke; ihr Text ist markiert, sodass du ihn entweder übernimmst oder direkt überschreibst. Im Snippet-Editor fügt **Sprungmarke einfügen** eine ein.

Sprungmarken funktionieren auch in gewöhnlichem Text, nicht nur in Snippets. Welche Zeichen sie umschliessen, legst du in den Einstellungen unter **Sprungmarken** fest; lässt du das Feld leer, sind sie aus.
