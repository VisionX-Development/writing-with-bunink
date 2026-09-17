---

title: Pull Requests: Zusammenarbeit mit dem Lektorat

chapter: 7

slug: pull-requests

slug_en: pull-requests

description: Wie du mit Hilfe einer zweiten Person deine Texte überarbeiten kannst, z.B. einem Lektor.

lang: de

status: draft

updated: 2026-09-17

---



# **Pull Requests: Zusammenarbeit mit dem Lektorat**

Bis hierhin hast du allein gearbeitet. Dieses Kapitel zeigt, wie eine zweite Person deinen Text überarbeitet — auf einem eigenen Branch, ohne deine Fassung zu berühren — und wie du am Ende jeden Vorschlag einzeln übernimmst, verwirfst oder mit einer eigenen Fassung beantwortest.

## **Was ein Pull Request ist**

Ein Pull Request ist eine Anfrage: «Hier ist ein Branch mit Änderungen, bitte nimm sie in deinen auf.» GitHub hält dazu fest, welche Zeilen sich zwischen den beiden Branches unterscheiden, und sammelt Kommentare und Vorschläge an genau diesen Stellen. Am Ende wird der Pull Request gemergt — die Änderungen kommen in den Ziel-Branch — oder geschlossen, ohne dass etwas übernommen wird.

In bun.ink heisst der ganze Vorgang **Überarbeitung**. Die Person, die überarbeitet, bekommt dafür einen eigenen Branch neben deinem; der Pull Request zielt auf deinen Branch. Deine Fassung ändert sich erst, wenn du etwas übernimmst.

### **Was beide Seiten brauchen**

- **Zwei Konten.** Autor und Lektorat haben je ein eigenes GitHub-Konto und ein eigenes bun.ink-Konto. Es gibt keinen Gastzugang.
- **Zugriff auf das Repository.** Den vergibst du auf GitHub, nicht in bun.ink: Lade die Person in den Einstellungen deines Repositorys unter *Collaborators* ein. Wer dort keinen Zugang hat, sieht dein Projekt in bun.ink nicht.
- **Ein aktives Abo oder eine laufende Testphase** auf beiden Seiten.
- **Schreibrechte zum Mergen.** Wer im Repository nur lesen darf, kann Vorschläge machen, aber nicht mergen; der Knopf erscheint dann nicht.

## **Eine Überarbeitung beginnen**

Der Text, der überarbeitet werden soll, muss auf einem Branch liegen — nicht auf `main`. Lege als Autor zuerst einen an, etwa `kapitel-3`, und speichere deinen Stand dorthin. Die Überarbeitung braucht ein Ziel, das sich später zusammenführen lässt.

Das Lektorat geht dann so vor:

1. Öffne das Projekt und wechsle über die Branch-Liste auf den Branch des Autors.
2. Klicke im Bereich **Pull Request** der Seitenleiste auf **Überarbeitungs-Branch anlegen**. Ein Fenster erklärt, was passiert: Die Überarbeitung bekommt einen eigenen Branch, der Pull Request zielt auf den Branch des Autors, und dessen Fassung bleibt unberührt.
3. bun.ink legt den Branch an und wechselt dorthin. Er heisst `bun.ink_review/<branch>`, also etwa `bun.ink_review/kapitel-3`, und trägt in der Seitenleiste das Abzeichen **Überarbeitung**.

Je Autoren-Branch gibt es genau einen Überarbeitungs-Branch. Existiert er schon, heisst der Knopf **Überarbeitung fortführen** und wechselt dorthin; weitere Änderungen gehören in dieselbe Überarbeitung.

## **Vorschläge und Notizen schreiben**

Auf dem Überarbeitungs-Branch arbeitest du zuerst ganz normal im Editor: umformulieren, kürzen, streichen. Es gilt, was in Kapitel 5 steht — der Stand liegt in deinem Browser, bis du ihn mit **Auf Branch speichern** nach GitHub schreibst.

Zu Vorschlägen für den Autor wird das über **Überarbeitung schreiben** in der Seitenleiste. Das Fenster **Überarbeitung zur Erstellung eines PRs** hat zwei Teile.

### **Notizen zum ganzen Text**

Unter **Entwurf: Notizen** schreibst du Anmerkungen, die sich an keiner Stelle festmachen lassen — zum Aufbau, zur Figur, zum Ton. Ein Titel ist freiwillig. **Notiz lokal speichern** legt die Notiz ab.

### **Vorschläge an einer Stelle**

Unter **Textvergleich** steht für jedes Dokument, das du geändert hast, die Fassung des Autors links und deine rechts. Der Vergleich zeigt Formatierung, nicht Markdown-Zeichen; ein kursives Wort erscheint kursiv.

Um eine Stelle vorzuschlagen:

1. Klicke am Rand einer Zeile auf **+** (mit gedrückter Umschalttaste für einen Bereich). Das Fenster **Änderung vorschlagen** öffnet sich und nennt die Zeilen, um die es geht.
2. Mit **Einen Absatz mehr** und **Einen Absatz weniger** passt du den Bereich an, solange du den Wortlaut noch nicht angefasst hast.
3. Trage unter **Ersatztext** den neuen Wortlaut ein. Lässt du ihn, wie er ist, und schreibst nur unter **Kommentar (optional)**, bleibt der Text unverändert — die Anmerkung geht als Kommentar an diese Stelle.
4. **Vorschlag lokal speichern** legt den Entwurf ab.

Jeder Entwurf wird zu einer Karte unter dem Vergleich. Sie nennt die Zeilen, die der Wortlaut im Text belegt; ein Klick darauf rollt zur Stelle. Umgekehrt steht im Vergleich am Zeilenrand ein Zeichen, wo ein Entwurf liegt — ein Klick darauf führt zur Karte.

An jeder Karte gibt es zwei Knöpfe: Der Stift öffnet den Entwurf zum Nachbessern, das x entfernt ihn. Beim Entfernen nimmt bun.ink auch den Wortlaut aus dem Text — sonst bliebe eine Änderung ohne Entwurf übrig und ginge stumm mit dem Commit.

Ändert sich der Text unter einem Entwurf, etwa weil du den Absatz danach noch einmal umgeschrieben hast, bekommt die Karte einen roten Rahmen mit dem Hinweis, dass die Stelle inzwischen anders lautet. Bessere den Entwurf nach, wende ihn mit **Erneut anwenden** wieder an oder entferne ihn. Solange eine solche Karte offen ist, entsteht kein Pull Request.

Alle Entwürfe bleiben auf deinem Gerät, auch wenn du das Fenster schliesst oder den Browser neu lädst. Die Seitenleiste zeigt an, wie viele Notizen und Vorschläge angefangen sind, und **Überarbeitung fortsetzen** bringt dich zurück.

## **Den Pull Request erzeugen**

Unten im Fenster steht **Commit für PR erstellen**. Der Ablauf hat zwei Schritte, und bun.ink erklärt jeden vorher:

1. **Commit für Pull Request** — deine Änderungen werden auf dem Überarbeitungs-Branch committet. Ein Pull Request braucht mindestens einen Commit; besteht deine Überarbeitung nur aus Anmerkungen ohne Textänderung, erzeugt bun.ink einen Commit ohne Änderungen, damit der Pull Request trotzdem entstehen kann.
2. **Pull Request erzeugen** — der Pull Request wird auf GitHub geöffnet, und deine Notizen und Vorschläge werden dort veröffentlicht. Du kannst diesen Schritt auch aufschieben und weiterarbeiten.

Zwei Dinge geschehen dabei, die du wissen solltest:

- Ein Vorschlag mit neuem Wortlaut landet auf GitHub so, dass der Autor ihn mit einem Klick übernehmen kann. Ein reiner Kommentar bleibt ein Kommentar.
- Kommentare zu Stellen, die dein Branch nicht ändert, kann GitHub nicht an die Zeile hängen. bun.ink veröffentlicht sie stattdessen als Beitrag am Pull Request, mit Datei, Zeilen und Zitat der Stelle, und sagt dir, wie viele so gelandet sind.

Fällt dir später noch etwas ein, entsteht kein zweiter Pull Request. Neue Entwürfe gehen über **Überarbeitung absenden** und **An Pull Request senden** an den bestehenden. Den Pull Request selbst siehst du in der Seitenleiste unter **Pull Request**, mit **Auf GitHub öffnen** auch dort.

## **Vorschläge als Autor durchgehen**

Sobald ein Pull Request auf deinen Branch zielt, steht in der Seitenleiste: *Für deinen Branch liegt eine Überarbeitung vor.* Darunter der Pull Request mit seiner Nummer und zwei Knöpfe. Du hast zwei Wege, und du kannst sie mischen.

### **Im Text, Stelle für Stelle**

**Vorschläge im Text durchgehen** öffnet neben deinem Dokument den Bereich **Review-Vorschläge** mit allen Vorschlägen zu dem Dokument, das gerade offen ist. Jede Karte zeigt die **Markierte Stelle**, den **Vorgeschlagenen Text**, den Kommentar und wer ihn geschrieben hat. Liegen die Vorschläge zu einer anderen Datei, sagt bun.ink das; öffne dann diese Datei.

- **Im Dokument zeigen** springt zur Fundstelle.
- **Diesen Vorschlag übernehmen** setzt den Wortlaut in dein Dokument. Er steht sofort dort, und du kannst weiterschreiben. Nach GitHub kommt er mit **Auf Branch speichern**.
- Unter **Antwort** antwortest du dem Lektorat; die Antwort erscheint auf GitHub an derselben Stelle.

Steht der vorgeschlagene Wortlaut schon so in deinem Text, sagt bun.ink das und ändert nichts.

### **Die ganze Überarbeitung auf einmal**

Ein Klick auf den Pull Request in der Seitenleiste öffnet **Review PR #… für den Merge**. Unter **Geänderte Dateien** steht jede Datei mit einem Vergleich: links dein Text, rechts die Fassung der Überarbeitung. Verglichen wird gegen den Stand, an dem die Überarbeitung abgezweigt hat — was du seither selbst geändert hast, bleibt bewusst aussen vor.

Entschieden wird nicht nach Zeilen, sondern nach **Blöcken**: zusammenhängenden Stellen, an denen sich etwas geändert hat. Ein Vorschlag über zwei Absätze ist ein Block, eine Karte, eine Entscheidung. Unter jedem Vergleich stehen die Karten; wie im Fenster des Lektorats führen Zeilenangabe und Zeichen am Rand hin und zurück. Ändert ein Block nur die Formatierung, steht das auf der Karte, etwa *Nur die Formatierung ändert sich: kursiv → fett*.

Jede Karte zeigt **Vor der Überarbeitung** und **Änderungsvorschlag** und bietet vier Antworten:

- **Behalten** — die Stelle kommt mit, wenn du am Ende mergst. In deinem Dokument ändert sich jetzt noch nichts.
- **Vorschlag verwerfen** — die Stelle bleibt, wie sie bei dir war. Unter **Warum? (freiwillig)** kannst du einen Grund nennen; **Diese Änderung verwerfen** bestätigt.
- **Eigene Fassung vorschlagen** — dein dritter Wortlaut. Unter **Meine Fassung** schreibst du ihn; **Diese Fassung vormerken** merkt ihn vor. Er geht als Gegenvorschlag an die Überarbeitung, in deinen Text kommt er erst mit dem Merge.
- **Diesen Vorschlag übernehmen** — der Wortlaut steht sofort in deinem Dokument, wie im Vorschlags-Bereich. Das gilt auch für Streichungen: Der gestrichene Absatz ist dann bei dir weg.

Verworfene Stellen und Gegenvorschläge schreibt bun.ink auf den Überarbeitungs-Branch zurück, als Gegen-Commit mit einer Notiz am Pull Request. Das Lektorat sieht so, was du nicht wolltest und was du stattdessen vorschlägst — statt dass die Stellen stumm wegfallen.

### **Wenn eine Stelle nicht mehr passt**

Hast du weitergeschrieben, während gelesen wurde, findet bun.ink die Stelle eines Vorschlags vielleicht nicht mehr eindeutig: Sie steht mehrfach im Text oder gar nicht mehr. Die Karte trägt dann das Abzeichen **Braucht deine Entscheidung**, und bun.ink rät nicht.

**Von Hand lösen** öffnet das Fenster **Diese Stelle lösen**. Es zeigt deinen aktuellen Text und den **Vorschlag der Überarbeitung** nebeneinander und nennt die Zeilen, die ersetzt würden. Prüfe, ob das die gemeinte Stelle ist — die Überarbeitung hat in ihrer eigenen Fassung gezählt. Dann **Vorgeschlagenen Wortlaut einsetzen**, eine eigene Fassung schreiben und **In den Text übernehmen**, oder abbrechen.

## **Den Pull Request abschliessen**

### **Mergen**

**PR mergen** übernimmt alles, was du behalten hast, in deinen Branch und löscht den Überarbeitungs-Branch. Der Knopf ist erst frei, wenn über jeden Block entschieden ist; solange zählt er: **Noch 3 Entscheidungen offen**. Ein unentschiedener Vorschlag würde sonst ungesehen mitwandern.

Ausserdem muss dein Branch gespeichert sein. Vorschläge, die du übernommen hast, zählen dabei nicht als offene Arbeit — der Merge bringt genau diesen Text. Nur eigene Änderungen darüber hinaus musst du vorher mit **Auf Branch speichern** sichern.

Hast du übernommene Vorschläge gespeichert, meldet GitHub den Pull Request oft als nicht mergebar: Beide Branches haben dieselbe Stelle geändert, und GitHub sieht nicht, dass es dieselbe Änderung ist. bun.ink zeigt das an und bietet **Konflikte auflösen und mergen**. Dein Text wird die Auflösung — was du entschieden hast, gilt —, und der Merge geht durch. Es entsteht kein neuer Pull Request.

Nach dem Merge lädt bun.ink deinen Branch neu; der gemergte Text ist ab jetzt dein Stand. In `main` ist er damit noch nicht — das ist der Schritt **In main mergen** aus Kapitel 5, wenn du so weit bist.

Wurde der Pull Request inzwischen auf GitHub geschlossen, fragt bun.ink nach: **Wieder öffnen und mergen**, oder abbrechen. Ein bereits gemergter Pull Request bleibt gemergt.

### **Schliessen ohne Merge**

Hast du alles, was du wolltest, schon Stelle für Stelle übernommen, beendet **Pull Request schliessen** den Vorgang, ohne zu mergen. Was du übernommen hast, bleibt in deinem Dokument; alles andere wird verworfen. Eine Notiz am Pull Request nennt dem Lektorat je Datei, wie viele der vorgeschlagenen Änderungen übernommen wurden.

### **Dateien, die keine Dokumente sind**

Ändert die Überarbeitung eine Datei, die in deinem Projekt kein Dokument ist, kannst du sie in bun.ink nicht einzeln übernehmen. Sie zählt nicht als offene Entscheidung, und der Merge bringt sie trotzdem mit.
