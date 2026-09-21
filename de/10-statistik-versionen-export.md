---

title: Statistik, Versionen und Export

chapter: 10

slug: statistik-versionen-export

slug\_en: statistics-versions-and-export

description: Wo [bun.ink](http://bun.ink) sich deine früheren Fassungen merkt, was die Schreibstatistik zeigt und wie du deine Texte wieder herausbekommst.

lang: de

status: draft

updated: 2026-09-21

---

# Statistik, Versionen und Export

Drei Dinge, die nichts miteinander zu tun zu haben scheinen und doch dieselbe Frage beantworten: Was ist mit meinem Text passiert, und wie komme ich an frühere Stände heran? Dieses Kapitel zeigt, welches Gedächtnis [bun.ink](http://bun.ink) führt, was die Statistik daraus macht und wie du deine Texte jederzeit wieder in die Hand bekommst.

## Drei Arten von Gedächtnis

[bun.ink](http://bun.ink) merkt sich deine Arbeit an drei Stellen, und sie beantworten verschiedene Fragen:

| Wo | Was es festhält | Wofür du es brauchst |

|---|---|---|

| **Verlauf** | frühere Fassungen eines einzelnen Dokuments, automatisch | «Wie stand dieser Absatz gestern da?» |

| **Commit-Historie** | Stände, die du bewusst festgehalten hast, über alle Dateien | «Wie sah das Projekt aus, als ich das Kapitel abgegeben habe?» |

| **Export** | eine Kopie ausserhalb von [bun.ink](http://bun.ink) | «Was habe ich, wenn nichts anderes mehr da ist?» |

Sie ersetzen einander nicht. Der Verlauf ist feinkörnig, aber nur für ein Dokument und nur im Hauptbranch (Kapitel 5). Die Commit-Historie umfasst das ganze Projekt, hält aber nur fest, was du selbst committet hast (Kapitel 6). Der Export ist das Einzige, was auch dann noch funktioniert, wenn du [bun.ink](http://bun.ink) nicht mehr benutzt.

Wer beides nutzt — oft speichern, regelmässig committen —, hat für fast jede Rückfrage die passende Antwort. Und wer zusätzlich exportiert, hat sie auch dann noch, wenn etwas schiefgeht.

## Der Versionsverlauf eines Dokuments

Jedes Dokument führt seinen eigenen Verlauf. Du findest ihn in der Seitenleiste unter **Verlauf**, während das Dokument offen ist.

Er entsteht ohne dein Zutun: [bun.ink](http://bun.ink) legt beim Speichern Fassungen ab, und du kannst ältere ansehen und miteinander vergleichen. Dafür musst du nichts eingerichtet haben und nichts mit GitHub verbunden haben — der Verlauf gehört zum Dokument, nicht zum Repository.

Zwei Eigenheiten sind wichtig:

- **Nur auf dem Hauptbranch.** Bist du im Branch-Modus, gibt es keinen Verlauf. Was du dort schreibst, liegt bis zum Speichern nur in deinem Browser (Kapitel 5) — speichere deshalb auf einem Branch öfter, als du es gewohnt bist.

- **Konfliktversionen landen hier.** Meldet der Editor, dass dasselbe Dokument anderswo gespeichert wurde, legt **Lokale Version sichern** deinen Stand als eigene Fassung in den Verlauf (Kapitel 3). Genau dafür ist er da: Nichts geht verloren, und du vergleichst später in Ruhe.

Die naheliegende Verwechslung: Der Verlauf ist nicht deine Commit-Historie. Er kennt nur dieses eine Dokument, er kennt keine Commit-Nachrichten, und er verlässt [bun.ink](http://bun.ink) nicht. Wenn du festhalten willst, dass ein bestimmter Stand *der* Stand war — die Fassung, die zum Verlag ging —, dann gehört dazu ein Commit mit einer Nachricht, kein Eintrag im Verlauf.

## Die Schreibstatistik

Die Statistik beantwortet eine andere Frage als der Verlauf: nicht «was stand da», sondern «wie viel habe ich gearbeitet».

Sie zählt die Wörter in deinen Dokumenten und wertet daneben die Commits der vergangenen Monate aus — daraus entsteht die Übersicht, an welchen Tagen du geschrieben hast. Wer also viel schreibt, aber selten committet, sieht in der Aktivität weniger, als er geleistet hat; ein weiteres Argument dafür, öfter zu committen.

Zwei Dinge, über die man sonst stolpert:

- **Gesperrte High-Privacy-Dokumente zählen null Wörter** (Kapitel 9). Ein plötzlicher Einbruch in der Statistik bedeutet oft nur, dass ein verschlüsselter Bereich gerade gesperrt ist.

- **Zahlen sind kein Urteil.** Ein Tag, an dem du dreihundert Wörter gestrichen hast, ist in der Statistik ein schlechter und in Wahrheit oft ein guter. Nimm sie als Erinnerung an deinen Rhythmus, nicht als Bewertung.

Neben der eigenen Neugier hat die Statistik einen zweiten Nutzen, der in Kapitel 8 steht: Sie ist, zusammen mit der Commit-Historie, ein Beleg dafür, wie ein Text entstanden ist.

## Exportieren

Der Export ist der Weg hinaus, und er ist bewusst unspektakulär: Über das Kontextmenü im Explorer bekommst du ein einzelnes Dokument als Markdown (`.md`) oder als reinen Text (`.txt`), einen Ordner oder ein ganzes Projekt als ZIP-Archiv mit erhaltener Ordnerstruktur (Kapitel 2).

Was du bekommst, ist deine Textsubstanz — und nur die. Nicht mitexportiert werden der Versionsverlauf, die Statistik und alles, was zu GitHub gehört. Ein Export ist eine Momentaufnahme, kein Abbild deiner Arbeit.

Deshalb lohnt sich ein einfacher Plan, den du durchhältst:

- **Liegen deine Texte in einem Repository**, hast du die Sicherung schon. Sie ist so aktuell wie dein letzter Push, sie liegt in deinem GitHub-Konto, und sie bleibt dort, auch wenn du [bun.ink](http://bun.ink) nicht mehr benutzt.

- **Liegen sie nicht in einem Repository** — bei High-Privacy-Bereichen liegen sie das nie —, bist du die Sicherung. Exportiere regelmässig und lege das Archiv woandershin (Kapitel 9).

Und eine Kleinigkeit, die Ärger spart: Ein gesperrter verschlüsselter Bereich lässt sich nicht exportieren. Entsperre zuerst, sonst bricht [bun.ink](http://bun.ink) ab.

## Wenn du [bun.ink](http://bun.ink) verlässt

Das Beste an Markdown ist, dass es keine Geisel nimmt. Deine Dokumente sind Textdateien — jeder Editor, jedes andere Schreibprogramm, jedes Textsatzsystem kommt damit zurecht. Es gibt kein Format, aus dem du erst wieder herausmüsstest.

Wenn du gehst, bleiben dir also drei Dinge: das Repository in deinem GitHub-Konto samt seiner vollständigen Geschichte, deine Exporte, und die Markdown-Dateien selbst. Was verloren geht, ist der Versionsverlauf innerhalb von [bun.ink](http://bun.ink) und die Statistik — beides liegt nur dort.

Dass dieses Kapitel im Handbuch der App steht, ist Absicht. Eine Schreibumgebung, die deine Texte lesbar und transportabel hält, hat einen Vorteil, den keine Funktionsliste ersetzt: Du bleibst, weil es dir passt, nicht weil du nicht mehr herauskommst.
