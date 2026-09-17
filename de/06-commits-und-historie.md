---

title: Commits und Historie

chapter: 6

slug: commits-und-historie

slug_en: commits-and-history

description: Wie aus deinen Änderungen ein Commit wird, wie du ihn nach GitHub bringst und wo du die Geschichte deines Textes nachliest.

lang: de

status: draft

updated: 2026-08-21

---



# **Commits und Historie**

Ein Repository merkt sich nicht jeden Tastendruck, sondern die Stände, die du bewusst festhältst. Dieses Kapitel zeigt, wie du so einen Stand erzeugst und wo du die entstandene Geschichte nachliest.

## Was ein Commit ist

Ein Commit ist ein festgehaltener Stand deiner Texte mit einer Notiz dazu. Er hält fest, welche Dateien sich geändert haben, wie sie vorher aussahen und was du dir dabei gedacht hast.

Der Unterschied zum Speichern ist wichtig. Speichern sichert deinen aktuellen Text. Ein Commit sagt zusätzlich: Dieser Stand hier ist einer, zu dem ich zurückfinden will. Deshalb gehört zu jedem Commit eine Nachricht, und deshalb ist sie Pflicht.

## Sehen, was sich geändert hat

Bevor du committest, lohnt ein Blick auf die Liste. Im GitHub-Bereich der Seitenleiste steht unter **Änderungen**, was seit dem letzten Commit anders ist. Jede Datei ist markiert als **Neu**, **Geändert** oder **Gelöscht**.

Mit **Diff zum GitHub-Stand öffnen** siehst du für eine Datei genau, was sich geändert hat — dieselbe Gegenüberstellung wie im Änderungs-Modus, nur gegen den Stand im Repository statt gegen deinen letzten Speicherpunkt.

**Änderungen aktualisieren** holt den Stand frisch von GitHub. Ist nichts offen, sagt die Liste genau das.

## Committen und pushen

Über **Nach GitHub pushen...** öffnest du den Dialog. Er hat drei Teile:

1. **Dateien** — du wählst aus, was in diesen Commit soll. Du kannst einzelne abwählen und später separat committen; mindestens eine Datei muss ausgewählt sein.
2. **Commit-Nachricht** — die Notiz zu diesem Stand. Das Feld fragt: «Was wurde geändert?»
3. **Speichern und pushen** — [bun.ink](http://bun.ink) sichert den lokalen Stand, erzeugt den Commit und schickt ihn zum aktiven Branch.

Zur Nachricht: Ein halber Satz reicht, aber ein aussagekräftiger. «Kapitel 3 gekürzt, Dialog auf Seite 4 gestrichen» hilft dir in einem halben Jahr; «Änderungen» hilft dir nie. Schreib, was du geändert hast, nicht dass du etwas geändert hast.

Hat GitHub inzwischen neue Änderungen, blockiert [bun.ink](http://bun.ink) den Push und bittet dich, zuerst zu synchronisieren. Das ist kein Fehler, sondern der Schutz davor, die Arbeit von jemand anderem zu überschreiben.

## Änderungen von GitHub holen

Die Gegenrichtung steht unter **Eingehend von GitHub**. Jede Datei ist markiert als **Neu auf GitHub**, **Auf GitHub geändert** oder **Auf GitHub entfernt**.

**Mit GitHub synchronisieren...** übernimmt diese Änderungen. Was nur auf einer Seite geändert wurde, übernimmt [bun.ink](http://bun.ink) automatisch. Für Dateien, die auf beiden Seiten geändert wurden, entscheidest du je Datei — **GitHub-Version übernehmen**, **Meine Version behalten** oder **Beide als getrennte Dateien behalten**.

Zeigt der Vergleich keinen sichtbaren Unterschied, liegt es meist an Leerzeichen oder Zeilenenden; [bun.ink](http://bun.ink) sagt das dazu.

Daneben gibt es **Dateien aus GitHub laden** für den einfachen Fall, in dem du nur holen und nichts auflösen willst. [bun.ink](http://bun.ink) blockiert das, solange du offene eigene Änderungen hast — committe und pushe die zuerst. Ebenso meldet es sich, wenn im Repository keine Markdown- oder Textdateien liegen; dein lokaler Stand bleibt dann unverändert.

## Wo die Historie (noch nicht) steht

Hier eine ehrliche Auskunft: [bun.ink](http://bun.ink) zeigt dir die Liste deiner Commits noch nicht an. Dieses Feature ist aber in Planung und kommt bald. Die Geschichte deines Textes liest du bis dahin auf [github.com](http://github.com) im Repository selbst — dort siehst du jeden Commit, seine Nachricht, sein Datum und die zugehörigen Änderungen Zeile für Zeile.

Was [bun.ink](http://bun.ink) aus der Historie verwendet, ist die Aktivität: Die Schreibstatistik wertet die Commits der letzten Monate aus und zeigt dir daraus, an welchen Tagen du gearbeitet hast.

Unabhängig von Git führt [bun.ink](http://bun.ink) ausserdem einen eigenen Versionsverlauf pro Dokument, im Seitenleisten-Bereich **Verlauf**. Der ist etwas anderes als die Commit-Historie: feinkörniger, nur für ein Dokument, und nur auf dem Hauptbranch verfügbar.

---
