---

title: Erste Schritte

chapter: 1

slug: erste-schritte

slug_en: getting-started

description: Wie du ein Konto anlegst, deine E-Mail-Adresse bestätigst, dich anmeldest und was in den Einstellungen steht.

lang: de

status: draft

updated: 2026-08-21

---



# Erste Schritte

Bevor du schreiben kannst, brauchst du ein Konto. Dieses Kapitel führt dich durch die Registrierung, die Bestätigung deiner E-Mail-Adresse und die Anmeldung. Danach siehst du, was in den Einstellungen steht und was du dort ändern kannst.

## Was du brauchst

Einen Browser und eine E-Mail-Adresse, auf die du Zugriff hast. Mehr nicht.

Ein GitHub-Konto brauchst du erst, wenn du deine Texte in einem Repository ablegen willst. Bis dahin funktioniert [bun.ink](http://bun.ink) ohne.

## Ein Konto erstellen

Öffne [bun.ink](http://bun.ink) und klick auf **Konto erstellen**. Das Formular hat vier Felder:

- **Name** — mindestens 2, höchstens 128 Zeichen. Er muss nicht eindeutig sein; dein Konto wird über die E-Mail-Adresse identifiziert. Der Name erscheint in deinem Konto und auf Rechnungen.
- **E-Mail** — hierhin geht der Bestätigungslink, und damit meldest du dich später an.
- **Passwort** — mindestens 8 Zeichen. Mit dem Augen-Symbol im Feld kannst du deine Eingabe sichtbar machen.
- **Passwort bestätigen** — muss übereinstimmen.

Dazu kommt eine Checkbox: **Ich habe die Datenschutzerklärung und die AGB gelesen und bin mit beiden einverstanden.** Ohne dieses Häkchen wird das Formular nicht abgeschickt. Je nach Konfiguration läuft ausserdem eine kurze Sicherheitsprüfung gegen Bot-Registrierungen; sie erledigt sich meist von selbst.

Über dem Absenden-Button steht eine Liste der Anforderungen. Jede Zeile hakt sich ab, sobald das Feld stimmt — du siehst also vor dem Klick, was noch fehlt.

Wenn zu dieser Adresse schon ein Konto existiert, meldet [bun.ink](http://bun.ink) das direkt. Dann gehst du zur Anmeldung, oder setzt dein Passwort zurück.

Mit dem Konto beginnt eine kostenlose Testphase von 14 Tagen. Du bist sofort angemeldet, landest aber zunächst auf der Seite **E-Mail-Bestätigung erforderlich**.

## Die E-Mail-Adresse bestätigen

Solange deine Adresse nicht bestätigt ist, bleiben Editor, Snippets und Einstellungen gesperrt. Ein Banner weist dich darauf hin, und jeder Aufruf dieser Bereiche führt zurück auf die Bestätigungsseite.

Wir schicken dir eine E-Mail mit einem Link. Klick darauf. Die Seite bestätigt deine Adresse automatisch; falls nichts passiert, klick auf **E-Mail-Adresse bestätigen**. Der Link funktioniert auch auf einem Gerät, auf dem du nicht angemeldet bist — du kannst die Mail also auf dem Handy öffnen und am Laptop weiterarbeiten.

Kommt keine E-Mail an, prüf zuerst den Spam-Ordner. Danach kannst du sie erneut anfordern: auf der Bestätigungsseite mit **Bestätigungs-E-Mail erneut senden**, oder später unter **Einstellungen › Benutzerdaten**. Drei Anforderungen pro Stunde sind möglich, danach musst du warten.

Der Link lässt sich nur einmal verwenden. Öffnest du ihn ein zweites Mal, meldet [bun.ink](http://bun.ink), dass deine Adresse bereits bestätigt ist — das ist kein Fehler. Nach der Bestätigung bringt dich **Weiter** in den Editor.

## Anmelden, abmelden, Passwort vergessen

Zum Anmelden gibst du E-Mail-Adresse und Passwort ein und klickst **Einloggen**. Stimmt eines von beiden nicht, heisst die Meldung **E-Mail oder Passwort ist falsch** — [bun.ink](http://bun.ink) verrät nicht, welches der beiden das Problem war. Nach fünf Fehlversuchen innerhalb von 15 Minuten wird die Anmeldung von deiner Verbindung aus kurz gesperrt; die Meldung nennt dir die Wartezeit.

Abmelden kannst du dich über das Benutzermenü oben rechts oder über **Einstellungen › Account › Ausloggen**. Hast du ungespeicherte Änderungen auf einem GitHub-Branch offen, fragt [bun.ink](http://bun.ink) vorher nach: solche Änderungen liegen nicht im Konto und gingen beim Abmelden verloren.

Wenn du dein Passwort vergessen hast, klick auf der Anmeldeseite auf **Passwort vergessen?**. Gib deine Adresse ein, und du bekommst einen Link, über den du ein neues Passwort setzt. Die Bestätigung auf dem Bildschirm ist bewusst neutral formuliert und verrät nicht, ob es zu dieser Adresse ein Konto gibt. Auch hier gilt: drei Anfragen pro Stunde.

Bist du bereits angemeldet, läuft der Passwort-Reset über **Einstellungen › Sicherheit**. Die Mail geht dann an die hinterlegte Adresse, ohne Tippfehler-Risiko.

## Was in den Einstellungen steht

Die Einstellungen erreichst du über deine Initialen oben rechts und dann **Einstellungen**. Sie sind in sechs Bereiche geteilt.

### Benutzerdaten

Oben stehen **Name** und **E-Mail** deines Kontos, wie sie aktuell hinterlegt sind.

Unter **Name ändern** trägst du einen neuen Namen ein und speicherst mit **Name speichern**. Der Name wird auch auf deinen Rechnungen aktualisiert.

Darunter steht der Status deiner E-Mail-Bestätigung. Ist die Adresse noch nicht bestätigt, findest du hier den Button zum erneuten Versand.

### Account

**Abo** zeigt deinen aktuellen Plan und das Datum, an dem Testphase oder Abrechnungsperiode endet. Von hier aus schliesst du ein Monatsabo (8.99 EUR) oder ein Jahresabo (89.00 EUR) ab. Ein Gutscheincode lässt sich optional eingeben. Du kannst ein Abo schon während der Testphase wählen — abgerechnet wird erst, wenn die Testphase endet. Bezahlung und Rechnungen laufen über Stripe; **Billing verwalten** öffnet das Stripe-Portal, in dem du Rechnungen einsiehst und kündigst.

Darunter liegen **Ausloggen** und **Account löschen**.

### Sicherheit

**E-Mail-Adresse ändern** braucht die neue Adresse und dein aktuelles Passwort. [bun.ink](http://bun.ink) schickt einen Bestätigungslink an die neue Adresse. Deine Login-Adresse ändert sich erst, wenn du diesen Link öffnest — und der Link ist 15 Minuten gültig. Hast du dich vertippt und die Mail an die falsche Adresse geschickt, macht **Link jetzt ungültig machen** ihn sofort wertlos. Nach der Bestätigung gilt die neue Adresse als bestätigt; eine zweite Verifizierungsmail brauchst du nicht.

**Passwort zurücksetzen** schickt dir eine Recovery-Mail an deine Kontoadresse.

**Sicherheits-Logout** meldet dich nach einer Zeit ohne Aktivität automatisch ab. Du schaltest ihn per Häkchen ein und wählst die Inaktivitätsdauer: 2, 5, 10, 15, 30 oder 60 Minuten. Kurz vor dem Abmelden läuft ein Countdown. [bun.ink](http://bun.ink) speichert davor offene Änderungen in deinem Konto — nicht nach GitHub — und entfernt die zwischengespeicherten Inhalte aus diesem Browser, genau wie beim normalen Abmelden.

### GitHub, Editor und Hilfe

Unter **GitHub** siehst du deine verbundenen GitHub-Konten, kannst weitere verbinden und bestehende trennen. Was diese Verbindung bewirkt, steht im Kapitel über GitHub.

Unter **Editor** liegen die Schreibeinstellungen: **Sprungmarken**, **Formatierungs-Bubble**, **Schreibmaschinen-Scrollen (Zen-Modus)**, die Stealth-Taste und die Tastenkürzel für **Speichern** und **Zen-Modus**. Das Editor-Kapitel erklärt sie im Zusammenhang.

Unter **Hilfe** liegt ein Kontaktformular — du wählst ein Thema und schreibst deine Nachricht, die Antwort kommt per E-Mail. Ausserdem kannst du hier die geführte Tour durch die App noch einmal starten.

## Das Konto löschen

Die Löschung liegt unter **Einstellungen › Account › Account unwiderruflich löschen**. Ein Dialog fragt vorher nach.

Gelöscht werden alle Projekte, Dokumente, Snippets und Einstellungen, die in [bun.ink](http://bun.ink) liegen. Das lässt sich nicht rückgängig machen. Texte, die du in ein GitHub-Repository gespeichert hast, bleiben dort unberührt — sie gehören deinem GitHub-Konto, nicht [bun.ink](http://bun.ink).

Läuft auf deinem Konto nur die kostenlose Testphase, wird alles sofort entfernt. Besteht ein bezahltes Abo, kündigt [bun.ink](http://bun.ink) es sofort und schickt dir eine letzte E-Mail. Darin steht ein Link, über den du 30 Tage lang noch deine Stripe-Rechnungen und den Abo-Status einsehen kannst.