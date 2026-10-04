---
title: Der Editor
chapter: 3
slug: der-editor
slug_en: the-editor
description: Wie du im Editor schreibst, formatierst, speicherst und mit Snippets schneller wirst.
lang: de
status: draft
updated: 2026-10-04
---



# **Der Editor**

Der Editor ist die Fläche, auf der du tatsächlich schreibst. Dieses Kapitel zeigt, wie du formatierst, mit mehreren Dokumenten gleichzeitig arbeitest, speicherst und siehst, was du geändert hast.

## Schreiben mit Markdown

Was du siehst, ist formatierter Text. Was gespeichert wird, ist Markdown — eine schlichte Textform, in der Formatierung durch Zeichen im Text ausgedrückt wird. Du musst Markdown nicht können; du profitierst nur davon, dass deine Texte später überall lesbar bleiben.

Am schnellsten formatierst du direkt beim Tippen. `#` am Zeilenanfang macht eine Überschrift, `##` eine der zweiten Ebene. `-` beginnt eine Aufzählung, `1.` eine nummerierte Liste, `>` ein Zitat. Sternchen um ein Wort machen es kursiv, doppelte Sternchen fett.

Wenn dir das zu viel Syntax ist, nimm den **Format**-Knopf in der Werkzeugleiste. Er sammelt alle Befehle in vier Gruppen:

- **Text:** **Fett**, **Kursiv**, **Durchgestrichen** und **Inline-Code**.
- **Absatz:** **Überschrift 1** bis **Überschrift 3**, **Aufzählung**, **Nummerierte Liste**, **Zitat** und **Code-Block**. Ein Code-Block zeigt Text in fester Zeichenbreite und mit Rahmen; ist eine Sprache angegeben, etwa `python`, steht sie oben links am Block. Ein zweiter Klick auf denselben Eintrag macht wieder einen gewöhnlichen Absatz daraus.
- **Darstellung:** **Zeilenumbruch** beginnt eine neue Zeile im selben Absatz, ohne Abstand dazwischen — dasselbe wie Shift+Enter. **Zeilenabstand** stellt zwischen **Eng**, **Kompakt**, **Normal** und **Weit** um; die Einstellung gilt für alle Dokumente und landet nie in der Datei, weil Markdown keinen Zeilenabstand kennt. **Markdown-Quelltext** zeigt das Dokument so, wie es gespeichert wird: mit allen Zeichen, Metadaten und Link-Adressen. Diese Ansicht ist nur zum Lesen; **Zurück zum Editor** bringt dich wieder zum Schreiben.
- **Dokument:** **Metadaten einfügen** und **Notiz einfügen** (beides erklärt Kapitel 11) sowie **Zeilenumbrüche anzeigen**.

Unterstreichen findest du nicht. Markdown kennt es nicht, und bun.ink bietet nichts an, was es beim Speichern wieder verlieren würde.

Markierst du eine Textstelle, erscheint daneben eine kleine Leiste, die Formatierungs-Bubble. Sie bietet zunächst **Fett**, **Kursiv**, **Durchgestrichen** und **Inline-Code** an. Welche Befehle sie zeigt, wählst du in den Einstellungen unter **Editor** bei **Formatierungs-Bubble** aus — zur Wahl stehen alle Formate der Gruppen **Text** und **Absatz**, dazu **Metadaten einfügen** und **Notiz einfügen**. Dort lässt sich die Bubble auch ganz abschalten, wenn sie dich stört; der **Format**-Knopf bleibt in jedem Fall.

### Absätze und Zeilenumbrüche

Eine Zeile kann auf drei Arten enden, und jede bedeutet etwas anderes:

| Du drückst | Was entsteht | In der Datei | Mit **Zeilenumbrüche anzeigen** |
|---|---|---|---|
| Enter | ein neuer Absatz | eine Leerzeile | ¶ am Absatzende |
| Shift+Enter oder **Format → Darstellung → Zeilenumbruch** | eine neue Zeile im selben Absatz | zwei Leerzeichen am Zeilenende | ↵ |
| – | ein weicher Umbruch | ein einfaches Zeilenende | ↩ |

Anders als `#` oder Sternchen haben Zeilenumbrüche keine Tipp-Abkürzung: Zwei Leerzeichen oder ein `\` am Zeilenende bleiben im Editor genau das, was sie sind. Den Umbruch im Absatz machst du mit Shift+Enter, die Markdown-Zeichen dafür schreibt bun.ink beim Speichern selbst.

Den weichen Umbruch tippst du nie selbst. Er steht in Dateien, die anderswo entstanden sind — in einem anderen Editor, von einem KI-Agenten oder in einem Pull Request. Manche schreiben jeden Satz auf eine eigene Zeile, damit ein Commit genau den geänderten Satz zeigt und nicht den ganzen Absatz. Für Markdown ist so ein Zeilenende ein Leerzeichen: Auf GitHub, im Blog und in jedem Export läuft der Absatz als Fliesstext durch. bun.ink zeigt ihn deshalb genauso, behält aber jedes Zeilenende und speichert die Datei so zurück, wie sie war. Ein Commit zeigt dann nur, was du tatsächlich geändert hast.

Bricht eine Zeile mitten im Absatz um, obwohl rechts noch Platz wäre, steckt meist ein harter Umbruch dahinter, der sonst kein eigenes Zeichen hat. Schalte **Format → Dokument → Zeilenumbrüche anzeigen** ein: Wie die Formatierungszeichen in Word erscheinen ¶ am Ende jedes Absatzes, ↵ bei jedem harten und ↩ bei jedem weichen Umbruch. Die Zeichen stehen nur auf dem Bildschirm, nie in der Datei. Einen ungewollten Umbruch löschst du wie jedes andere Zeichen; löschst du ein ↩, rücken die beiden Zeilen auch in der Datei zusammen. Ein zweiter Klick auf den Eintrag blendet die Zeichen wieder aus.

## Mehrere Dokumente in Tabs

Jedes geöffnete Dokument bekommt einen Tab. Du kannst also am Kapitel schreiben, während die Recherchenotizen daneben offen sind, und mit einem Klick wechseln.

**Neues Dokument** legt eines an und öffnet es gleich. **Tab schließen** schliesst das aktuelle, **Alle Tabs schließen** räumt auf. Sind es mehr Tabs, als in die Zeile passen, kannst du die Leiste nach links und rechts scrollen.

Auf dem Handy zeigt bun.ink statt der Tab-Leiste eine kompaktere Auswahl — der Editor selbst funktioniert genauso.

## Speichern

Gespeichert wird auf Tastendruck: standardmässig Strg+S, auf dem Mac Cmd+S. Das Kürzel kannst du in den Einstellungen unter **Editor** im Abschnitt **Shortcuts** bei **Speichern** auf etwas anderes legen.

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
