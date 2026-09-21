---
title: Verschlüsselte Bereiche
chapter: 9
slug: verschluesselte-bereiche
slug_en: encrypted-areas
description: Wie bun.ink deine Texte verschlüsselt, was ein High-Privacy-Bereich zusätzlich schützt und was er dich kostet.
lang: de
status: draft
updated: 2026-09-21
---

# Verschlüsselte Bereiche

Kapitel 2 hat gezeigt, wie du einen High-Privacy-Bereich anlegst und entsperrst. Dieses Kapitel beantwortet die Frage dahinter: Wovor schützt dich das eigentlich, wovor nicht, und was gibst du dafür auf. Am Ende sollst du entscheiden können, welche deiner Texte in so einen Bereich gehören — und welche dort nur im Weg liegen.

## Zwei Stufen, nicht eine

[bun.ink](http://bun.ink) verschlüsselt immer. Der Unterschied liegt darin, wer den Schlüssel hat.

**Die normale Stufe.** Deine Texte liegen verschlüsselt in der Datenbank. Damit die App arbeiten kann — suchen, Wörter zählen, nach GitHub schreiben, Versionen vergleichen —, muss der Server sie dafür entschlüsseln können. Der Schlüssel dazu liegt beim Server-Admin. Gegen einen gestohlenen Datenträger oder einen Blick in die Datenbank schützt das; gegen jemanden mit vollem Zugriff auf den laufenden Server nicht.

**Die High-Privacy-Stufe.** Hier entsteht der Schlüssel aus deiner Passphrase, und zwar in deinem Browser. Der Text wird dort verschlüsselt und verlässt dein Gerät nur in dieser Form. Der Server speichert etwas, das er selbst nicht lesen kann — der Admin ebenso wenig. Das ist gemeint, wenn von Ende-zu-Ende-Verschlüsselung die Rede ist.

Der Preis dafür steht schon in diesem Satz: Was der Server nicht lesen kann, kann er auch nicht für dich verarbeiten. Fast alles, was in diesem Kapitel noch als Einschränkung auftaucht, folgt aus dieser einen Tatsache.

## Passphrase, Wiederherstellungsschlüssel, Sitzung

Drei Dinge hängen zusammen, und es lohnt sich, sie auseinanderzuhalten.

Die **Passphrase** ist das, was du dir merkst. Aus ihr entsteht der Schlüssel, mit dem entsperrt wird. [bun.ink](http://bun.ink) kennt sie nicht und kann sie nicht zurücksetzen — es gibt keinen Weg über den Support, keine Wiederherstellung aus einem Backup. Das ist keine Unfreundlichkeit, sondern dieselbe Eigenschaft, die den Bereich schützt: Ein Anbieter, der dich wieder hineinlassen könnte, könnte auch selbst hineinsehen.

Der **Wiederherstellungsschlüssel** ist dein zweiter Weg hinein. Er wird genau einmal angezeigt, beim Anlegen des Bereichs. Behandle ihn wie das Original deines Manuskripts: Passwortmanager, ausgedruckt im Ordner, nicht in einer Notiz-App auf demselben Gerät. Er gilt unbefristet und lässt sich nicht austauschen — auch dann nicht, wenn du die Passphrase änderst. Wer ihn hat, kommt hinein, für immer. Umgekehrt heisst das: Ist er einmal in falsche Hände geraten, hilft kein Passphrasenwechsel, sondern nur ein neuer Bereich, in den du die Texte umziehst.

Die **Sitzung** ist das kurze Gedächtnis. Entsperrt bleibt der Bereich nur, solange die Seite offen ist; nach einem Neuladen ist er wieder zu. Dazu passt der **Auto-Logout** aus den Einstellungen: Er meldet dich nach einer Zeit ohne Aktivität ab. Wenn du an einem Ort arbeitest, an dem andere an deinen Bildschirm können, ist er die zweite Hälfte des Schutzes.

## Wogegen es schützt — und wogegen nicht

Ein verschlüsselter Bereich schützt gegen jeden, der an die gespeicherten Daten kommt: Server, Datenbank, Backups, Betreiber.

Er schützt nicht gegen dein eigenes Gerät. Sobald du entsperrst, liegt der Text im Klartext in deinem Browser — und damit offen für jeden, der diesen Browser kontrolliert oder auf den Bildschirm sieht. Ein kompromittierter Rechner, eine fremde Erweiterung, ein nicht gesperrter Arbeitsplatz: Gegen all das hilft die stärkste Verschlüsselung nichts.

Er schützt auch nicht davor, dass sichtbar bleibt, *dass* du schreibst. Namen von Ordnern und Dokumenten, ihre Grösse, die Zeitstempel und die Anzahl der Versionen bleiben lesbar. Wenn schon der Dateiname verräterisch wäre, nenn ihn anders — der Schutz liegt im Inhalt, nicht in der Beschriftung.

Und er schützt nicht vor dir selbst. Die häufigste Art, Texte in einem High-Privacy-Bereich zu verlieren, ist nicht ein Angriff, sondern eine vergessene Passphrase.

## Was du dafür aufgibst

In einem High-Privacy-Bereich fällt fast alles weg, was die Kapitel 4 bis 8 beschreiben. Das ist kein Mangel, sondern die Folge davon, dass der Server den Text nicht kennt:

- **Kein GitHub.** Ein High-Privacy-Ordner wird nie übertragen, ein High-Privacy-Projekt lässt sich gar nicht erst verknüpfen. Damit gibt es dort auch keine Branches, keine Commits, keine Pull Requests und keine Historie im Repository.

- **Kein Lektorat über Pull Requests.** Die Zusammenarbeit aus Kapitel 7 läuft vollständig über GitHub. Wer deinen verschlüsselten Text lesen soll, bekommt ihn anders — exportiert, und dann ausserhalb von [bun.ink](http://bun.ink).

- **Keine Agenten.** Ein Agent liest das Repository. Was dort nicht ankommt, kann er nicht lesen, nicht korrigieren und nicht verraten. Für Texte, die kein Modell sehen soll, ist das genau das gewünschte Verhalten (Kapitel 8).

- **Keine Suche, keine Statistik im gesperrten Zustand.** Die Suche überspringt gesperrte Dokumente, und die Statistik zählt sie mit null Wörtern. Wundere dich nicht über einen Einbruch in der Kurve — entsperre und sieh noch einmal nach.

- **Kein Export, solange gesperrt ist.** Ein Export würde sonst unlesbaren Text enthalten, deshalb bricht [bun.ink](http://bun.ink) ihn ab.

## Was hineingehört — und was nicht

Die nützliche Frage ist nicht «wie geheim ist mein Text», sondern: Was passiert, wenn genau dieser Text bei jemandem landet, der ihn nicht haben soll?

Dafür spricht ein verschlüsselter Bereich: Recherchematerial mit Namen von Quellen, die anonym bleiben müssen. Tagebücher und Notizen, die nie veröffentlicht werden. Texte unter Verschwiegenheitspflicht. Alles, was Dritte betrifft, die nie gefragt wurden.

Dagegen spricht er bei allem, woran du arbeiten willst wie an deinen anderen Texten. Ein Roman, den du in Fassungen entwickelst und überarbeiten lässt, ist in einem High-Privacy-Projekt schlecht aufgehoben — dort fehlt dir genau das Werkzeug, das du dafür brauchst.

Der Mittelweg ist meistens der richtige: **ein High-Privacy-Ordner innerhalb eines normalen Projekts.** Das Manuskript arbeitet mit GitHub, der Ordner mit den Quellen bleibt verschlüsselt und zu Hause. Du musst dich also nicht für das ganze Projekt entscheiden.

## Deine Sicherung ist deine eigene

Bei einem normalen Projekt liegt eine zweite Fassung deiner Texte in deinem Repository. Fällt [bun.ink](http://bun.ink) aus, kündigst du, verlierst du dein Passwort — die Texte sind trotzdem da. Diese Sicherung fehlt im verschlüsselten Bereich vollständig, und zwar genau deshalb, weil dort nichts nach aussen geht.

Also machst du sie selbst:

1. **Entsperren, dann exportieren.** Ordner oder Projekt über das Kontextmenü als ZIP herausschreiben (Kapitel 2).

2. **Regelmässig, nicht einmal.** Nach jedem Arbeitsabschnitt, an dem dir etwas liegt. Ein Export vom letzten Sommer ist ein Andenken, keine Sicherung.

3. **An einen Ort, der nicht dasselbe Gerät ist.** Eine verschlüsselte Festplatte, ein verschlüsseltes Archiv in einer Cloud, ein Datenträger im Schrank.

4. **Passphrase und Wiederherstellungsschlüssel getrennt davon.** Beides zusammen an einem Ort ist eine unverschlossene Tür mit Schild daneben.

Dass diese vier Punkte Arbeit sind, ist der ehrliche Teil dieses Kapitels. Ein Bereich, den niemand ausser dir öffnen kann, ist eben auch ein Bereich, für den niemand ausser dir sorgt.
