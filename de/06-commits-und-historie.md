---
title: Commits und Historie
chapter: 6
slug: commits-und-historie
slug_en: commits-and-history
description: Wie aus deinen Änderungen ein Commit wird, wie du ihn nach GitHub bringst und wo du die Geschichte deines Textes nachliest.
lang: de
status: draft
updated: 2026-10-03
---



# **Commits und Historie**

Ein Repository merkt sich nicht jeden Tastendruck, sondern die Stände, die du bewusst festhältst. Dieses Kapitel zeigt, wie du so einen Stand erzeugst und wo du die entstandene Geschichte nachliest.

## Was ein Commit ist

Ein Commit ist ein festgehaltener Stand deiner Texte mit einer Notiz dazu. Er hält fest, welche Dateien sich geändert haben, wie sie vorher aussahen und was du dir dabei gedacht hast.

Der Unterschied zum Speichern ist wichtig. Speichern sichert deinen aktuellen Text. Ein Commit sagt zusätzlich: Dieser Stand hier ist einer, zu dem ich zurückfinden will. Deshalb gehört zu jedem Commit eine Nachricht, und deshalb ist sie Pflicht.

## Sehen, was sich geändert hat

Bevor du committest, lohnt ein Blick auf die Liste. Im GitHub-Bereich der Seitenleiste steht unter **Änderungen**, was seit dem letzten Commit anders ist. Jede Datei ist markiert als **Lokal neu**, **Lokal geändert** oder **Lokal gelöscht**.

Mit **Diff zum GitHub-Stand öffnen** siehst du für eine Datei genau, was sich geändert hat — dieselbe Gegenüberstellung wie im Änderungs-Modus, nur gegen den Stand im Repository statt gegen deinen letzten Speicherpunkt.

Den Stand von GitHub holt [bun.ink](http://bun.ink) selbst, sobald du den GitHub-Bereich öffnest; solange er lädt, dreht sich ein Kreis. Ist nichts offen, sagt die Liste genau das.

## Committen und pushen

Alles läuft über einen Knopf: **Mit GitHub synchronisieren...**. Er sichert zuerst deine offenen Dokumente, holt dann, was auf GitHub neu ist (siehe unten), und öffnet zum Schluss den Commit-Dialog. Der hat drei Teile:

1. **Dateien** — du wählst aus, was in diesen Commit soll. Du kannst einzelne abwählen und später separat committen; mindestens eine Datei muss ausgewählt sein.
2. **Commit-Nachricht** — die Notiz zu diesem Stand. Das Feld fragt: «Was wurde geändert?»
3. **Speichern und pushen** — [bun.ink](http://bun.ink) sichert den lokalen Stand, erzeugt den Commit und schickt ihn zum aktiven Branch.

Zur Nachricht: Ein halber Satz reicht, aber ein aussagekräftiger. «Kapitel 3 gekürzt, Dialog auf Seite 4 gestrichen» hilft dir in einem halben Jahr; «Änderungen» hilft dir nie. Schreib, was du geändert hast, nicht dass du etwas geändert hast.

Weil der Knopf erst holt und dann committet, kann dein Push nicht die Arbeit von jemand anderem überschreiben: Was auf GitHub neu ist, ist schon übernommen, bevor dein Commit hinausgeht. Gibt es nichts zu committen, meldet [bun.ink](http://bun.ink), dass du bereits auf dem Stand von GitHub bist. Auf einem Branch heisst der letzte Schritt **Auf Branch speichern** (Kapitel 5).

## Änderungen von GitHub holen

Die Gegenrichtung steht unter **Eingehend von GitHub**. Jede Datei ist markiert als **Neu auf GitHub**, **Auf GitHub geändert** oder **Auf GitHub entfernt**.

**Mit GitHub synchronisieren...** übernimmt diese Änderungen, bevor es zum Commit geht. Was nur auf einer Seite geändert wurde, übernimmt [bun.ink](http://bun.ink) automatisch. Für Dateien, die auf beiden Seiten geändert wurden, entscheidest du je Datei — **GitHub-Version übernehmen**, **Meine Version behalten** oder **Beide als getrennte Dateien behalten**. Brichst du an dieser Stelle ab, endet der ganze Ablauf, und es wird nichts committet.

Zeigt der Vergleich keinen sichtbaren Unterschied, liegt es meist an Leerzeichen oder Zeilenenden; [bun.ink](http://bun.ink) sagt das dazu.

## Die Historie lesen: der Commit-Browser

Im Seitenleisten-Bereich **Änderungen** steht der Abschnitt **Commits**: die Commits des aktuellen Branches, jeder mit Nachricht und Datum. Mit **Weitere Commits laden** gehst du weiter zurück.

Jeder Commit trägt zwei Schalter, **A** und **B**. A ist die ältere Seite, B die neuere – und B kann auch dein **Arbeitsstand** sein, also der Text, wie er gerade im Editor steht, ob gespeichert oder nicht. Beim Öffnen ist A der erste Commit des Branches und B der neueste. In der Kopfzeile des Abschnitts tauschst du A und B oder setzt beide auf diese Auswahl zurück. Verglichen wird immer das Dokument, das du gerade geöffnet hast.

Den Commit-Browser gibt es für Projekte, die mit einem Repository verknüpft sind – nicht für High-Privacy-Projekte (Kapitel 9). Wie du damit die Entstehung eines Textes nachvollziehst, zeigt der Blogbeitrag [Der Commit-Browser](https://bun.ink/blog/browsing-your-commit-history). Was ein Commit an allen Dateien zugleich geändert hat, siehst du auf [github.com](http://github.com) im Repository.

Was [bun.ink](http://bun.ink) aus der Historie verwendet, ist die Aktivität: Die Schreibstatistik wertet die Commits der letzten Monate aus und zeigt dir daraus, an welchen Tagen du gearbeitet hast.

Unabhängig von Git führt [bun.ink](http://bun.ink) ausserdem einen eigenen Versionsverlauf pro Dokument, im Seitenleisten-Bereich **Verlauf**. Der ist etwas anderes als die Commit-Historie: feinkörniger, nur für ein Dokument, und nur auf dem Hauptbranch verfügbar.

---
