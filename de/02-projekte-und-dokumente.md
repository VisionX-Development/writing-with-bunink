---

title: Projekte, Ordner und Dokumente

chapter: 2

slug: projekte-und-dokumente

slug_en: projects-folders-and-documents

description: Wie ein Schreibprojekt aufgebaut ist, wo ein Text hingehört und wie du Texte hinein- und herausbekommst.

lang: de

status: draft

updated: 2026-08-21

---



# **Projekte, Ordner und Dokumente**

Bevor du schreibst, brauchst du einen Ort für den Text. Dieses Kapitel zeigt, wie Projekte, Ordner und Dokumente zusammenhängen, wie du bestehende Texte hineinholst und wieder herausbekommst, und was ein verschlüsselter Bereich ist.

## **Was ein Projekt ist**

Ein Projekt ist die grosse Einheit: ein Buch, eine Kolumne, eine Reihe von Reportagen. Darin liegen Ordner, und darin liegen Dokumente — deine eigentlichen Texte.

Ordner sind freiwillig. Ein Dokument kann auch direkt im Projekt liegen, ohne Ordner darum herum; im Explorer heisst diese Ebene **Projektwurzel**. Ordner dürfen ineinander liegen, für Kapitel, Fassungen oder Themen.

Das Projekt ist ausserdem die Einheit, die du später mit GitHub verbindest. Es lohnt sich deshalb, zusammengehörende Texte in ein Projekt zu legen und nicht in mehrere.

## **Ordner und Dokumente anlegen**

Links im Editor liegt der **Explorer**. Er hat mehrere Ansichten; mit Hilfe der Maus ist er nach rechts erweiterbar, er kann ein- oder komplett ausgeklappt werden; für die Struktur brauchst du **Dateien**.

Über die Buttons legst du Neues an: Ein **neues Projekt**, ein **neuer Ordner**, ein **neues Dokument**. Im Dialog gibst du den **Namen** an und wählst bei Bedarf **Projekt** und **Zielordner**; **Projektwurzel** legt das Dokument direkt ins Projekt. **Anlegen** schliesst den Dialog.

Alles Weitere läuft über die rechte Maustaste. Ein Rechtsklick auf ein Projekt, einen Ordner oder ein Dokument öffnet ein Menü mit **Umbenennen**, **Verschieben** und **Löschen**. Möchtest du deine Dokumente am Handy bearbeiten musst du dazu deinen Finger lange auf das jeweilige Dokument, den Ordner oder das Projekt drücken.

Beim Löschen fragt [bun.ink](http://bun.ink) nach, und die Frage ist ernst gemeint: Löschst du ein Projekt, verschwinden alle Ordner und Dokumente darin. Bei einem Ordner ebenso, samt Unterordnern.

Zwei Kleinigkeiten zu Namen: Dokumente tragen die Endung `.md` oder `.txt` — fehlt sie, ergänzt [bun.ink](http://bun.ink) sie. Und auf derselben Ebene kann es keine zwei Dokumente mit demselben Namen geben.

## Projekte öffnen und schliessen

Oben im Explorer liegen die Projekt-Tabs. Du kannst mehrere Projekte gleichzeitig offen haben und zwischen ihnen wechseln.

Über den Ordner-Knopf und **Projekt öffnen** holst du ein weiteres dazu. **Projekt schließen** nimmt es wieder aus dem Explorer — gelöscht wird dabei nichts, das Projekt bleibt in deinem Konto und lässt sich jederzeit wieder öffnen.

Ist noch nichts da, sagt der Explorer das direkt: entweder gibt es noch keine Projekte, oder es ist nur gerade keines geöffnet.

## **Hochladen und exportieren**

Bestehende Texte holst du über **Hochladen** herein. Angenommen werden `.md`- und `.txt`-Dateien.

[bun.ink](http://bun.ink) überspringt still, was nicht passt, und sagt danach, was es war: falsches Format, zu gross für ein Dokument, oder auf dieser Ebene liegt schon ein Dokument mit diesem Namen. Die Meldung nennt die betroffenen Dateien beim Namen.

Der Weg hinaus führt über dasselbe Kontextmenü. Ein einzelnes Dokument exportierst du als Markdown (`.md`) oder als reinen Text (`.txt`). Bei einem Ordner oder einem ganzen Projekt bekommst du ein ZIP-Archiv, in dem die Ordnerstruktur erhalten bleibt.

## **Suchen und ersetzen**

Der Explorer-Modus **Suche** durchsucht alle Dokumente eines Projekts auf einmal.

Du wählst das **Projekt**, gibst den **Suchtext** ein und siehst die Treffer nach Dokument gruppiert. **Groß-/Kleinschreibung beachten** schaltet die genaue Schreibweise scharf.

Mit **Einzuschließende Dateien** und **Auszuschließende Dateien** grenzt du ein, wo gesucht wird. Beide Felder nehmen Muster wie `*.md` oder `manuskript/**`.

Ersetzen geht in drei Stufen: einzelner Treffer mit **Ersetzen**, alle Treffer eines Dokuments mit **In Datei ersetzen**, alles auf einmal mit **Alle ersetzen**. Das Letzte fragt vorher nach und zeigt dir, in wie vielen Dateien es Ersetzen anwendet.

## **High-Privacy-Projekte und -Ordner**

Normalerweise liegen bereits alle deine Texte in verschlüsselter Form in der Datenbank der [bun.ink](http://bun.ink) Cloud. Um alle Funktionen von [bun.ink](http://bun.ink) nutzen zu können muss der Server sie aber mit einem speziellen Schlüssel entschlüsseln. Dieser Schlüssel liegt sicher und geheim bei nur einer Person - dem [bun.ink](http://bun.ink) Server-Admin. Wie diese Verschlüsselung bei [bun.ink](http://bun.ink) genauer funktioniert klärt ein anderes Kapitel. Ein High-Privacy-Bereich ändert das: sein Inhalt wird in deinem Browser verschlüsselt und verlässt ihn nur verschlüsselt. Niemand mit Zugriff auf den bun.ink Server kann ihn lesen — d.h. auch der [bun.ink](http://bun.ink) Server-Admin nicht.

### **Einen verschlüsselten Bereich anlegen**

Im Anlege-Dialog gibt es die Option **High-Privacy-Projekt (Ende-zu-Ende-verschlüsselt)** beziehungsweise **High-Privacy-Ordner (Ende-zu-Ende-verschlüsselt)**. Bei einem Projekt ist jedes Dokument darin verschlüsselt, auch die ausserhalb aller Ordner; bei einem Ordner nur, was darin liegt.

Du vergibst eine **Passphrase** von mindestens 8 Zeichen und wiederholst sie. Lies den Warnhinweis, bevor du bestätigst: Verlierst du die Passphrase, sind die Texte verloren. Wir können sie nicht zurücksetzen und die Inhalte nicht wiederherstellen, auch nicht aus einem Backup.

Danach zeigt [bun.ink](http://bun.ink) dir einmal einen **Wiederherstellungsschlüssel**. Er entsperrt den Bereich auch ohne Passphrase. Speichere ihn sofort, am besten im Passwortmanager — er wird kein zweites Mal angezeigt.

### Entsperren

Ein verschlüsselter Bereich ist beim Öffnen gesperrt. Zum Entsperren gibst du die Passphrase ein oder den Wiederherstellungsschlüssel. Das gilt für diese Browser-Sitzung; nach einem Neuladen der Seite ist der Bereich wieder gesperrt.

Solange er gesperrt ist, schrumpft sein Kontextmenü auf **Entsperren**. Umbenennen, Verschieben, Löschen und Export sind dann nicht möglich — sonst würdest du Strukturen verändern, deren Inhalt du gerade nicht sehen kannst. Auch Speichern ist blockiert, und ein Export würde nur verschlüsselten Text enthalten, weshalb bun.ink ihn abbricht und zum Entsperren auffordert.

Die Passphrase kannst du über das Kontextmenü ändern. Dafür brauchst du die alte Passphrase oder den Wiederherstellungsschlüssel. Deine Texte bleiben dabei mit demselben Schlüssel verschlüsselt und müssen nicht neu gespeichert werden — und der Wiederherstellungsschlüssel bleibt gültig. Der Wiederherstellungsschlüssel bleibt für immer bestehen und lasst sich nicht ändern!

### Was verschlüsselt ist und was nicht

Verschlüsselt sind die Inhalte deiner Dokumente. Sichtbar bleiben die Namen von Ordnern und Dokumenten, ihre Grösse, die Zeitstempel und die Anzahl gespeicherter Versionen.

Ehrlich gesagt gehört noch ein zweiter Satz dazu: Die Verschlüsselung schützt gegen jeden mit Server-Zugriff. Sie schützt nicht gegen ein kompromittiertes Gerät — jemand der deinen Browser kontrolliert, oder den Inhalt am Monitor sieht , z.B. falls du nicht ausgeloggt deinen Arbeitsplatz verlassen hast, kann deine Dokumente einsehen. Gegen letzteres bietet [bun.ink](http://bun.ink) aber auch einen Schutz: der Auto-Logout. Ist der Auto-Logout aktiviert, wird ein eingeloggter User automatisch nach einer gewählten Zeit an Inaktivität ausgeloggt.

Im gesperrten Zustand zählt die Statistik für diese Hight-Privacy-Dokumente null Wörter, und die Suche überspringt sie.

### Kein GitHub

Ein High-Privacy-Ordner wird nie zu GitHub übertragen. Er bleibt Teil des Projekts, aber seine Dokumente erreichen das Repository nicht — dort landet also weder verschlüsselter noch lesbarer Text. In der Seitenleiste ist er entsprechend markiert, und beim Verknüpfen nennt [bun.ink](http://bun.ink) die betroffenen Ordner beim Namen.

Ein High-Privacy-**Projekt** lässt sich gar nicht erst mit GitHub verknüpfen. Es gäbe nichts zu übertragen, was dort einen Sinn ergäbe.