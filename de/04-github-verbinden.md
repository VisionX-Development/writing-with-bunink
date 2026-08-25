---

title: GitHub verbinden

chapter: 4

slug: github-verbinden

slug_en: connecting-github

description: Was ein Repository ist, wie du deinen GitHub-Account verbindest und ein Projekt mit einem Repository verknüpfst.

lang: de

status: draft

updated: 2026-08-21

---

# GitHub verbinden

Bis hierher lagen deine Texte in [bun.ink](http://bun.ink). Ab jetzt können sie zusätzlich in deinem eigenen GitHub-Repository liegen — und damit eine nachvollziehbare Geschichte bekommen. Dieses Kapitel zeigt, wie du die Verbindung herstellst.

## Was ein Repository ist

Ein Repository ist ein Ablageort für Dateien, der sich jede Änderung merkt. Nicht nur den heutigen Stand, sondern jeden früheren: wer wann was geändert hat, und was vorher dastand.

Es gehört dir. [bun.ink](http://bun.ink) schreibt hinein und liest daraus, aber das Repository liegt in deinem GitHub-Konto. Kündigst du [bun.ink](http://bun.ink), bleiben deine Texte dort, wo sie sind.

Für dieses und die folgenden Kapitel brauchst du also ein GitHub-Konto. Es ist kostenlos, und private Repositories sind darin enthalten — niemand ausser dir sieht deine Texte, solange du das Repository privat anlegst.

## Den GitHub-Account verbinden

Die Verbindung stellst du einmal her, unter **Einstellungen › GitHub**. Ein Klick auf **GitHub verbinden** führt dich zu GitHub, wo du die Freigabe bestätigst.

[bun.ink](http://bun.ink) fragt dabei den Repository-Zugriff an: Lesen und Schreiben in deinen öffentlichen und privaten Repositories, dazu deinen GitHub-Login. Das ist mehr, als für ein einzelnes Repository nötig wäre — GitHub bietet für diesen Weg keine feinere Abstufung an. Welches Repository ein Projekt tatsächlich benutzt, entscheidest du danach selbst, und du kannst die Verbindung jederzeit wieder **Trennen**.

Du kannst mehrere GitHub-Accounts verbinden, etwa einen privaten und einen beruflichen. Über **Weiteren GitHub-Account verbinden** kommt ein zweiter dazu. Jedes Projekt merkt sich, zu welchem Account sein Repository gehört.

Ein Hinweis, der Zeit spart: GitHub verwendet immer den Account, mit dem du dort gerade angemeldet bist. Willst du einen anderen verbinden, wechsle zuerst auf [github.com](http://github.com) das Konto.

## Ein Repository mit einem Projekt verknüpfen

Verknüpft wird pro Projekt. Im Editor öffnest du in der Seitenleiste den Bereich **GitHub** und klickst auf **Repository verknüpfen**.

[bun.ink](http://bun.ink) listet deine Repositories auf, öffentliche wie private. Bereits verknüpfte blendet die Liste aus und nennt sie separat — jedes Repository gehört zu genau einem Projekt.

Hast du mehrere GitHub-Accounts verbunden, fragt [bun.ink](http://bun.ink) zuerst, zu welchem das Repository gehört. Ohne diese Zuordnung kann das Projekt nicht synchronisieren.

Danach kommt die Frage nach dem Ziel: **Als neues Projekt öffnen** legt in [bun.ink](http://bun.ink) ein neues Projekt aus dem Repository an. **Mit aktuellem Projekt verknüpfen** hängt das Repository an das Projekt, das gerade offen ist.

## Wenn beide Seiten schon Texte haben

Der interessante Fall: In [bun.ink](http://bun.ink) liegen Texte, im Repository liegen auch welche. Dann öffnet sich der Zusammenführen-Dialog.

Er nennt zwei Zahlen: wie viele Dateien neu hinzukommen, und wie viele auf beiden Seiten existieren, aber unterschiedlichen Inhalt haben. Die neuen werden einfach übernommen. Für jede strittige Datei entscheidest du selbst:

- **GitHub-Version übernehmen** — die Fassung aus dem Repository gewinnt.
- **Lokale Version behalten** — deine Fassung aus [bun.ink](http://bun.ink) gewinnt.
- **Beide als getrennte Dateien behalten** — nichts geht verloren, du hast danach zwei Dateien und entscheidest in Ruhe.

Im Zweifel ist die dritte Wahl die richtige. Du kannst später immer noch löschen; zurückholen ist mühsamer.

## Wie deine Texte im Repository liegen

Die Struktur deines Projekts wird zur Ordnerstruktur im Repository. Aus einem Projekt mit einem Ordner **Recherche** wird:

```
Romanprojekt/
  Kapitel 1.md
  Recherche/
    Szene A.md

```

Nach GitHub geschrieben werden Markdown-Dateien. Dokumentnamen werden dabei zu stabilen Dateinamen normalisiert — Sonderzeichen werden reduziert, damit die Datei auf jedem Betriebssystem funktioniert.

Eine Ausnahme bleibt: High-Privacy-Ordner werden nie übertragen, und High-Privacy-Projekte lassen sich gar nicht erst verknüpfen. Ihre Inhalte verlassen deinen Browser nur verschlüsselt, und verschlüsselter Text in einem Repository wäre für niemanden zu gebrauchen.

## Trennen und Störfälle

**Repository trennen** löst die Verknüpfung. In [bun.ink](http://bun.ink) bleibt das Projekt, im Repository bleiben die Dateien — nur der Draht dazwischen ist weg.

Zwei Störfälle meldet [bun.ink](http://bun.ink) von sich aus. Ist das verknüpfte Repository auf GitHub gelöscht worden oder dein Zugriff darauf entfernt, wird die Verknüpfung aus dem Projekt genommen; du wirst gefragt, ob auch das lokal gespeicherte Projekt weg soll. Dasselbe passiert, wenn das verbundene GitHub-Konto nicht mehr verfügbar ist. In beiden Fällen ist «Nein» die sichere Antwort, solange du nicht genau weisst, was passiert ist.