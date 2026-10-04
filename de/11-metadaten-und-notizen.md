---
title: Metadaten und Notizen
chapter: 11
slug: metadaten-und-notizen
slug_en: metadata-and-notes
description: Wie du einem Dokument Metadaten mitgibst und dir Notizen an den Text heftest, die in der fertigen Ansicht
unsichtbar bleiben.
lang: de
status: draft
updated: 2026-09-30
---

# Metadaten und Notizen

Eine Markdown-Datei kann mehr tragen als den Text, den man liest. Dieses Kapitel zeigt die zwei Arten, wie du in [bun.ink](http://bun.ink) Informationen in einem Dokument ablegst, die nicht Teil des Textes sind: **Metadaten** am Anfang der Datei und **Notizen** an einer bestimmten Stelle im Text.

## Wofür Metadaten und wofür Notizen

Beide stehen in derselben Datei wie dein Text, beide werden mit ihm gespeichert und landen mit ihm im Commit. Sie beantworten aber verschiedene Fragen:

- **Metadaten** sagen etwas über das ganze Dokument: Titel, Kurzbeschreibung, Status, Datum. Sie sind für Programme gedacht, die deine Dateien weiterverarbeiten — eine Website, ein Inhaltsverzeichnis, ein KI-Agent.
- **Notizen** sagen etwas über eine Stelle: „Quelle nachtragen“, „Dialog wirkt hölzern“, „mit Kapitel 4 abgleichen“. Sie sind für dich gedacht, während du schreibst.

## Metadaten: der Block am Dateianfang

Metadaten stehen in einem Block ganz oben in der Datei, zwischen zwei Zeilen mit drei Bindestrichen. Dieser Block heisst **Frontmatter**. Jede Zeile ist ein Feld mit Namen und Wert:                                                             

(Markdown)

title: Das zweite Kapitel

description: In dem Anna die Stadt verlässt.

status: draft

(Markdown)

Welche Felder es gibt, bestimmt nicht [bun.ink](http://bun.ink), sondern das Programm, das die Datei später liest. Ein Website-Generator wie Hugo, Jekyll oder Astro erwartet meist `title` und `date`, dieses Handbuch benutzt zusätzlich `chapter` und `status`. 

Halte dich an eine Zeile pro Feld nach dem Muster `name: wert`.                                                               

Auf GitHub erscheint der Block in der Dateiansicht als kleine Tabelle über dem Text. Im Editor von [bun.ink](http://bun.ink) ist er ein eigener Kasten mit der Beschriftung **Metadaten**.  

## Metadaten einfügen

1. Öffne das Dokument.
2. Klick in der Werkzeugleiste auf **Format** und in der Gruppe **Dokument** auf **Metadaten einfügen**.
3. Der Kasten erscheint am Anfang des Dokuments, der Cursor steht darin. Schreib die gewünschten Felder hinein, eines pro Zeile.

Der Block kommt immer an den Anfang, egal wo dein Cursor gerade steht. Solange er leer ist, zeigt er als Hilfe `title: …` an; das ist nur ein Platzhalter und wird nicht gespeichert.

Hat das Dokument schon Metadaten, heisst der Eintrag im Menü **Metadaten bearbeiten** und bringt dich direkt in den vorhandenen Block. Einen zweiten Block legt [bun.ink](http://bun.ink) nie an: Programme, die Metadaten lesen, beachten nur den ersten.

## Metadaten entfernen

Klick auf das × rechts in der Kopfzeile des Kastens. Der ganze Block verschwindet, dein Text bleibt. Mit Cmd+Z (Strg+Z unter Windows) holst du ihn zurück.

### Worauf du achten musst

Drei Bindestriche, die du selbst im Text tippst, werden zu einer **Trennlinie**, nicht zu einem Metadaten-Block. Metadaten legst du deshalb immer über das Menü an.

[bun.ink](http://bun.ink) speichert den Block Zeichen für Zeichen so, wie er ist. Öffnest du eine Datei, die schon Frontmatter mitbringt — etwa aus einem bestehenden Repository —, bleibt er beim Speichern unverändert.

## Notizen: Anmerkungen an einer Stelle im Text

Eine Notiz ist eine Anmerkung, die du dir an eine bestimmte Stelle heftest. Im Editor sieht sie aus wie eine farbig abgesetzte Karte zwischen zwei Absätzen, mit der Beschriftung **Notiz**. In jeder anderen Ansicht ist sie unsichtbar: in der Vorschau auf GitHub, auf einer Website, die aus deinen Dateien entsteht, in anderen Markdown-Programmen.

### Eine Notiz einfügen

1. Setz den Cursor in den Absatz, zu dem die Notiz gehört.

Die Notiz kommt immer hinter den ganzen Absatz, auch wenn dein Cursor mitten in einem Satz stand. Steht der Cursor in einer Aufzählung oder einem Zitat, kommt sie hinter die ganze Aufzählung oder das ganze Zitat. So zerschneidet eine Notiz nie deinen Text.

Um aus der Notiz zurück in den Text zu kommen, klick einfach in den nächsten Absatz oder geh mit der Pfeiltaste nach  unten.

### Schneller mit dem Tastenkürzel

Für Notizen gibt es ein Tastenkürzel, standardmässig \*\*Ctrl+N\*\* (die Control-Taste, auch auf dem Mac). Es tut dasselbe wie **Notiz einfügen** im Menü.

Unter Windows und Linux öffnet der Browser mit Strg+N ein neues Fenster und gibt die Taste nicht weiter. Leg das Kürzedort auf eine andere Kombination: In den Einstellungen unter **Editor**, bei **Notiz-Shortcut**, klick auf **Shortcut ändern** und drück die gewünschte Kombination. **Löschen** schaltet das Kürzel ganz ab; das Menü funktioniert weiterhin.                                                                                                                          

### Eine Notiz entfernen

Klick auf das **×** in der Kopfzeile der Notiz. Sie verschwindet vollständig, dein Text bleibt unverändert.

### Wo die Notiz gespeichert wird

Die Notiz ist Teil deines Dokuments. In der Datei steht sie als sogenannter HTML-Kommentar, eine Form, die jedes Markdown-Programm beim Anzeigen überspringt:         

(Markdown) 

Anna stand am Fenster und zählte die Züge.                                                                                                          

<!-- bun.ink:note
Wie viele Züge fahren nachts wirklich? Fahrplan prüfen.
-->

Der letzte kam um Viertel nach zwei.

(Markdown)

Daraus folgt:

- Die Notiz wird gespeichert, wenn du das Dokument speicherst, und wandert mit ihrer Stelle, wenn du den Text davor oder

danach umschreibst.

- Auf einem Branch geht sie mit dem nächsten Commit nach GitHub, auf dem Default-Branch mit dem Speichern in [bun.ink](http://bun.ink). Sie

braucht keinen eigenen Speicherort und geht nicht verloren, wenn du dich abmeldest.

- Die Wortzählung und die Schreibstatistik zählen Notizen nicht mit.
- Die Suche findet Notizen. So kannst du etwa alle offenen „Quelle nachtragen“ in einem Projekt aufspüren.
- Im Explorer-Modus **Änderungen** und in einem Pull Request erscheint eine neue Notiz wie jede andere Änderung am Text.

### Wer deine Notizen sieht

Unsichtbar ist eine Notiz nur in der fertigen Ansicht. In der Datei selbst steht sie im Klartext: Wer die Rohdatei öffnet, einen Commit ansieht oder einen Vergleich liest, sieht sie. Ist dein Repository öffentlich, sind es deine Notizen auch; arbeitet ein Lektorat im selben Repository, liest es sie mit.

Schreib in Notizen deshalb nichts, was niemand sehen darf. Wenn du mit der Maus über die Beschriftung **Notiz** fährst, erinnert dich [bun.ink](http://bun.ink) daran.

### Notizen und Review-Kommentare

Notizen sind nicht dasselbe wie die Kommentare in einem Pull Request. Ein **Review-Kommentar** schreibt jemand anderes an deinen Text, er steht auf GitHub am Pull Request und nicht in der Datei. Eine **Notiz** schreibst du dir selbst, und sie steht in der Datei. Für die Zusammenarbeit mit dem Lektorat sind Review-Kommentare der richtige Weg; Notizen sind dein Merkzettel.

## Andere Kommentare in deinen Dateien

Manche Dateien bringen schon HTML-Kommentare mit, die nicht von [bun.ink](http://bun.ink) stammen — ausgeblendete TODOs in einer README etwa oder Anweisungen für Prüfprogramme. [bun.ink](http://bun.ink) zeigt sie im Editor grau an und speichert sie unverändert zurück. Steht ein solcher Kommentar mitten in einem Satz, erscheint er als kleines Zeichen; seinen Inhalt zeigt [bun.ink](http://bun.ink), wenn du mit der Maus darüberfährst.
