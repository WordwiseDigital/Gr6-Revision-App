const topics = [
    {
        name: "Woordsoorte",
        questions: [
            { question: "Identifiseer die soortnaam in die sin: 'Die hond blaf vir die kat.'", options: ["hond", "blaf", "vir", "die"], answer: "hond", explanation: "'hond' is 'n soortnaam omdat dit na 'n algemene tipe dier verwys." },
            { question: "Wat is 'n eienaam in die sin: 'Ek gaan Durban toe.'?", options: ["Ek", "gaan", "Durban", "toe"], answer: "Durban", explanation: "'Durban' is 'n eienaam omdat dit die spesifieke naam van 'n stad is." },
            { question: "Watter woord is 'n abstrakte naamwoord?", options: ["tafel", "liefde", "boek", "stoel"], answer: "liefde", explanation: "'liefde' is 'n abstrakte naamwoord omdat dit 'n gevoel of idee is wat jy nie kan aanraak nie." },
            { question: "Gee die versamelnaam vir 'n groep skepe.", options: ["skool", "vloot", "trop", "swerm"], answer: "vloot", explanation: "'n 'vloot' is die korrekte versamelnaam vir 'n groep skepe." },
            { question: "Kies die korrekte persoonlike voornaamwoord: '... skop die bal.'", options: ["Hy", "sy", "dit", "ons"], answer: "Hy", explanation: "'Hy' is 'n persoonlike voornaamwoord wat na 'n manlike persoon verwys." },
            { question: "Watter woord is 'n besitlike voornaamwoord in die sin: 'Dit is my boek.'?", options: ["Dit", "is", "my", "boek"], answer: "my", explanation: "'my' wys dat die boek aan my behoort, wat dit 'n besitlike voornaamwoord maak." },
            { question: "Identifiseer die vraende voornaamwoord: 'Wie het die koek geëet?'", options: ["Wie", "het", "die", "koek"], answer: "Wie", explanation: "'Wie' is 'n vraende voornaamwoord omdat dit 'n vraag vra oor 'n persoon." },
            { question: "Kies die aanwysende voornaamwoord: 'Daardie huis is groot.'", options: ["Daardie", "Die", "is", "groot"], answer: "Daardie", explanation: "'Daardie' wys na 'n spesifieke huis, wat dit 'n aanwysende voornaamwoord maak." },
            { question: "Wat is die hoofwerkwoord in die sin: 'Die kinders speel in die tuin.'?", options: ["kinders", "speel", "in", "tuin"], answer: "speel", explanation: "'speel' is die hoofwerkwoord omdat dit die aksie in die sin beskryf." },
            { question: "Identifiseer die hulpwerkwoord: 'Ek het my werk gedoen.'", options: ["Ek", "het", "my", "werk"], answer: "het", explanation: "'het' is 'n hulpwerkwoord wat saam met die hoofwerkwoord 'gedoen' gebruik word om die verlede tyd te vorm." },
            { question: "Watter woord is 'n koppelwerkwoord in die sin: 'Sy is siek.'?", options: ["Sy", "is", "siek", "."], answer: "is", explanation: "'is' is 'n koppelwerkwoord wat die onderwerp 'Sy' aan die toestand 'siek' koppel." },
            { question: "Gee die korrekte trap van vergelyking vir 'groot'.", options: ["groot, groter, grootste", "groot, grooter, grootse", "groter, groot, grootste", "grootste, groter, groot"], answer: "groot, groter, grootste", explanation: "Die trappe van vergelyking is: stellende trap (groot), vergrotende trap (groter), en oortreffende trap (grootste)." },
            { question: "Identifiseer die bywoord van tyd: 'Ons gaan môre fliek.'", options: ["Ons", "gaan", "môre", "fliek"], answer: "môre", explanation: "'môre' is 'n bywoord van tyd omdat dit aandui wanneer die aksie plaasvind." },
            { question: "Watter woord is 'n bywoord van plek: 'Die kat slaap hier.'?", options: ["Die", "kat", "slaap", "hier"], answer: "hier", explanation: "'hier' is 'n bywoord van plek omdat dit aandui waar die aksie plaasvind." },
            { question: "Kies die voegwoord in die sin: 'Ek sal kom as jy my vra.'", options: ["Ek", "sal", "kom", "as"], answer: "as", explanation: "'as' is 'n voegwoord wat twee sinne ('Ek sal kom' en 'jy my vra') met mekaar verbind." },
            { question: "Identifiseer die voorsetsel: 'Die boek is op die tafel.'", options: ["Die", "boek", "is", "op"], answer: "op", explanation: "'op' is 'n voorsetsel wat die verhouding tussen die boek en die tafel aandui." },
            { question: "Watter woord is 'n tussenwerpsel?", options: ["Sjoe!", "loop", "en", "tafel"], answer: "Sjoe!", explanation: "'Sjoe!' is 'n tussenwerpsel omdat dit 'n uitroep van verbasing of bewondering is." },
            { question: "Kies die bepaalde lidwoord: 'Die seun is lank.'", options: ["Die", "'n", "seun", "lank"], answer: "Die", explanation: "'Die' is die bepaalde lidwoord. Dit verwys na 'n spesifieke seun." },
            { question: "Kies die onbepaalde lidwoord: 'Ek sien 'n voël.'", options: ["Ek", "sien", "'n", "voël"], answer: "'n", explanation: "''n' is die onbepaalde lidwoord. Dit verwys na enige voël, nie 'n spesifieke een nie." },
            { question: "Wat is die bywoord van wyse in die sin: 'Sy sing mooi.'?", options: ["Sy", "sing", "mooi", "."], answer: "mooi", explanation: "'mooi' is 'n bywoord van wyse omdat dit beskryf hoe sy sing." }
        ]
    },
    {
        name: "Sinstrukture",
        questions: [
            { question: "Rangskik die woorde korrek volgens STOMPI: (die bal - hy - skop - in die tuin)", options: ["Hy skop die bal in die tuin.", "In die tuin skop hy die bal.", "Hy in die tuin skop die bal.", "Die bal skop hy in die tuin."], answer: "Hy skop die bal in die tuin.", explanation: "Die korrekte STOMPI-volgorde is Onderwerp (Hy), Werkwoord 1 (skop), Voorwerp (die bal), Plek (in die tuin)." },
            { question: "Identifiseer die hoofsin: 'Ek lees die boek wat jy my gegee het.'", options: ["Ek lees die boek", "wat jy my gegee het", "lees die boek", "jy my gegee het"], answer: "Ek lees die boek", explanation: "Die hoofsin is die deel van die sin wat op sy eie kan staan en steeds sin maak." },
            { question: "Verander die sin na die indirekte rede: 'Sy sê: \"Ek is moeg.\"'", options: ["Sy sê sy is moeg.", "Sy sê ek is moeg.", "Sy sê sy was moeg.", "Sy sê dat sy is moeg."], answer: "Sy sê sy is moeg.", explanation: "In die indirekte rede verander die voornaamwoord 'Ek' na 'sy' en die aanhalingstekens val weg." },
            { question: "Verander die sin na die lydende vorm: 'Die seun skop die bal.'", options: ["Die bal word deur die seun geskop.", "Die bal is geskop deur die seun.", "Die seun word deur die bal geskop.", "Die bal skop die seun."], answer: "Die bal word deur die seun geskop.", explanation: "In die lydende vorm word die voorwerp (die bal) die onderwerp. Die werkwoord verander na 'word' + 'ge-' + stam." },
            { question: "Watse tipe sin is hierdie? 'Maak die deur toe.'", options: ["Stelsin", "Vraagsin", "Bevelsin", "Uitroepsin"], answer: "Bevelsin", explanation: "'n Bevelsin gee 'n opdrag of bevel." },
            { question: "Identifiseer die bysin: 'Die man wat daar loop, is my pa.'", options: ["Die man", "wat daar loop", "is my pa", "Die man is my pa"], answer: "wat daar loop", explanation: "Die bysin ('wat daar loop') gee meer inligting oor die onderwerp ('Die man') en kan nie op sy eie staan nie." },
            { question: "Verander na direkte rede: 'Hy vra of ek saamkom.'", options: ["Hy vra: \"Kom jy saam?\"", "Hy vra: \"Of ek saamkom.\"", "Hy vra: \"Ek kom saam.\"", "Hy vra: \"Jy kom saam.\""], answer: "Hy vra: \"Kom jy saam?\"", explanation: "In die direkte rede word die presiese woorde wat gevra is in aanhalingstekens geplaas." },
            { question: "Verander na die bedrywende vorm: 'Die venster is deur hom gebreek.'", options: ["Hy het die venster gebreek.", "Die venster het hom gebreek.", "Hy breek die venster.", "Die venster breek hom."], answer: "Hy het die venster gebreek.", explanation: "In die bedrywende vorm is die persoon wat die aksie doen (Hy) die onderwerp van die sin." },
            { question: "Watse tipe sin is hierdie? 'Wat is jou naam?'", options: ["Stelsin", "Vraagsin", "Bevelsin", "Uitroepsin"], answer: "Vraagsin", explanation: "'n Vraagsin vra 'n vraag en eindig met 'n vraagteken." },
            { question: "STOMPI: Rangskik die woorde: (gisteraand - die fliek - ons - geniet - baie)", options: ["Ons het gisteraand die fliek baie geniet.", "Gisteraand het ons die fliek baie geniet.", "Ons het die fliek gisteraand baie geniet.", "Baie het ons gisteraand die fliek geniet."], answer: "Ons het gisteraand die fliek baie geniet.", explanation: "STOMPI: Onderwerp(Ons), Werkwoord 1(het), Tyd(gisteraand), Voorwerp(die fliek), Manier(baie), Werkwoord 2(geniet)." }
        ]
    },
    {
        name: "Werkwoordtye",
        questions: [
            { question: "Verander na verlede tyd: 'Ek (speel) buite.'", options: ["Ek het buite gespeel.", "Ek was buite gespeel.", "Ek speel buite.", "Ek sal buite speel."], answer: "Ek het buite gespeel.", explanation: "In die verlede tyd gebruik ons 'het' en voeg 'ge-' by die werkwoord." },
            { question: "Verander na toekomende tyd: 'Sy (lees) 'n boek.'", options: ["Sy sal 'n boek lees.", "Sy het 'n boek gelees.", "Sy lees 'n boek.", "Sy gaan 'n boek lees."], answer: "Sy sal 'n boek lees.", explanation: "In die toekomende tyd gebruik ons 'sal' voor die werkwoord." },
            { question: "Wat is die teenwoordige tyd van 'geloop'?", options: ["loop", "het geloop", "sal loop", "geloop het"], answer: "loop", explanation: "'geloop' is die verlede tyd; die teenwoordige tyd is 'loop'." },
            { question: "Wat is die korrekte vorm? 'Gister (is) ek siek.'", options: ["was", "is", "wees", "sal wees"], answer: "was", explanation: "'Gister' dui die verlede tyd aan, so ons gebruik 'was'." },
            { question: "Verander na verlede tyd: 'Die hond (blaf).'", options: ["Die hond het geblaf.", "Die hond was geblaf.", "Die hond blaf.", "Die hond sal blaf."], answer: "Die hond het geblaf.", explanation: "Die verlede tyd van 'blaf' is 'het geblaf'." },
            { question: "Verander na toekomende tyd: 'Jy (skryf) 'n brief.'", options: ["Jy sal 'n brief skryf.", "Jy het 'n brief geskryf.", "Jy skryf 'n brief.", "Jy gaan 'n brief skryf."], answer: "Jy sal 'n brief skryf.", explanation: "Die toekomende tyd van 'skryf' is 'sal skryf'." },
            { question: "Wat is die verlede tyd van 'begin'?", options: ["het begin", "begon", "begin het", "beginde"], answer: "het begin", explanation: "Werkwoorde wat met 'be-', 'ge-', 'her-', 'er-', 'ont-' en 'ver-' begin, kry nie 'ge-' in die verlede tyd nie." },
            { question: "Kies die sin in die verlede voltooide tyd.", options: ["Nadat hy geëet het, het hy gaan slaap.", "Hy het geëet.", "Hy eet.", "Hy sal eet."], answer: "Nadat hy geëet het, het hy gaan slaap.", explanation: "Die verlede voltooide tyd beskryf 'n aksie wat voor 'n ander aksie in die verlede voltooi is, dikwels met 'nadat'." }
        ]
    },
    {
        name: "Woordvorming",
        questions: [
            { question: "Wat is die meervoud van 'tafel'?", options: ["tafels", "tafelle", "tafelde", "tafelens"], answer: "tafels", explanation: "Die meeste selfstandige naamwoorde kry 'n '-s' in die meervoud." },
            { question: "Wat is die meervoud van 'voet'?", options: ["voete", "voets", "voette", "voetens"], answer: "voete", explanation: "Sommige woorde het 'n klinkerverandering in die meervoud, soos 'voet' wat 'voete' word." },
            { question: "Wat is die verkleinwoord van 'hond'?", options: ["hondjie", "hondjie", "hondetjie", "hondie"], answer: "hondjie", explanation: "Die verkleiningsagtervoegsel vir woorde wat op '-nd' eindig, is '-jie'." },
            { question: "Wat is die verkleinwoord van 'stoel'?", options: ["stoeltjie", "stoelie", "stoeletjie", "stoelke"], answer: "stoeltjie", explanation: "Die verkleiningsagtervoegsel vir 'stoel' is '-tjie'." },
            { question: "Vorm 'n samestelling met 'boek' en 'rak'.", options: ["boekrak", "rakboek", "boeke rak", "rakke boek"], answer: "boekrak", explanation: "'n Samestelling is wanneer twee woorde saamgevoeg word om 'n nuwe woord te vorm." },
            { question: "Wat is die korrekte afleiding met die agtervoegsel '-heid' vir 'mooi'?", options: ["mooiheid", "mooigeid", "mooiheidheid", "mooi"], answer: "mooiheid", explanation: "Die agtervoegsel '-heid' word gebruik om 'n selfstandige naamwoord van 'n byvoeglike naamwoord te vorm." },
            { question: "Gee die intensiewe vorm van 'groot'.", options: ["reusegroot", "baie groot", "grootgroot", "groter"], answer: "reusegroot", explanation: "Die intensiewe vorm versterk die betekenis van die byvoeglike naamwoord. 'Reusegroot' beteken 'baie groot'." },
            { question: "Die byvoeglike naamwoord 'laerskoolse' is 'n voorbeeld van 'n...", options: ["Samestelling", "Afleiding", "Samestellende afleiding", "Verkleinwoord"], answer: "Samestellende afleiding", explanation: "Dit is gevorm van die samestelling 'laerskool' plus die agtervoegsel '-se'." },
            { question: "Watter woord is 'n samestellende afleiding?", options: ["kinderskoene", "vriendelik", "wetenskaplik", "boek"], answer: "wetenskaplik", explanation: "Dit kom van die samestelling 'wetenskap' en het die agtervoegsel '-lik' bygekry." }
        ]
    },
    {
        name: "Spelling en Leestekens",
        questions: [
            { question: "Watter leesteken kom aan die einde van 'n vraagsin?", options: ["?", ".", "!", ","], answer: "?", explanation: "'n Vraagteken (?) word altyd aan die einde van 'n vraagsin gebruik." },
            { question: "Kies die korrekte spelling: 'Die see is (blou/blouw).'", options: ["blou", "blouw"], answer: "blou", explanation: "Woorde wat op 'n 'ou'-klank eindig, word gewoonlik met 'ou' gespel, nie 'ouw' nie." },
            { question: "Watter woord het 'n deelteken nodig?", options: ["geëet", "geet", "geeet", "ge-eet"], answer: "geëet", explanation: "'n Deelteken (ë) word gebruik om aan te dui dat 'n nuwe lettergreep begin, soos in 'ge-eet'." },
            { question: "Watter woord het 'n kappie nodig?", options: ["wêreld", "wereld", "werelt", "wêrelt"], answer: "wêreld", explanation: "'n Kappie (ê) word gebruik om die 'e'-klank te verleng, soos in 'wêreld'." },
            { question: "Watter sin gebruik aanhalingstekens korrek?", options: ["\"Ek kom,\" sê sy.", "\"Ek kom, sê sy.\"", "Ek kom, \"sê sy.\"", "\"Ek kom\" sê sy."], answer: "\"Ek kom,\" sê sy.", explanation: "Aanhalingstekens (\"\") word om die presiese woorde wat iemand sê, geplaas. Die komma kom voor die laaste aanhalingsteken." },
            { question: "Wanneer gebruik ons 'n hoofletter?", options: ["Aan die begin van 'n sin en vir eiename", "Vir alle selfstandige naamwoorde", "In die middel van 'n sin", "Nooit nie"], answer: "Aan die begin van 'n sin en vir eiename", explanation: "Hoofletters word gebruik aan die begin van sinne en vir die name van mense, plekke, ens." },
            { question: "Watter woord het 'n afkappingsteken nodig?", options: ["ma's", "mas", "maas", "ma'es"], answer: "ma's", explanation: "Die afkappingsteken word gebruik om die meervoud van woorde wat op 'a' eindig, aan te dui." }
        ]
    },
    {
        name: "Woordbetekenis",
        questions: [
            { question: "Kies die sinoniem vir 'bly'.", options: ["gelukkig", "hartseer", "kwaad", "moeg"], answer: "gelukkig", explanation: "'n Sinoniem is 'n woord met dieselfde betekenis." },
            { question: "Kies die antoniem vir 'warm'.", options: ["koud", "hitte", "son", "vuur"], answer: "koud", explanation: "'n Antoniem is 'n woord met die teenoorgestelde betekenis." },
            { question: "Watter woord is 'n homoniem vir 'leer' (ladder)?", options: ["leer (to learn)", "lier", "leur", "laer"], answer: "leer (to learn)", explanation: "Homonieme is woorde wat dieselfde klink en gespel word, maar verskillende betekenisse het." },
            { question: "Kies die korrekte homofoon: 'Die pad teen die berg uit is baie ...'", options: ["styl", "steil"], answer: "steil", explanation: "'Steil' beteken 'steep'. 'Styl' verwys na 'style' of 'fashion'." },
            { question: "Kies die korrekte homofoon: 'Die kinders dans in 'n ...'", options: ["ry", "rei"], answer: "rei", explanation: "'n 'Rei' is 'n sirkeldans. 'Ry' beteken om te reis of 'n lyn." },
            { question: "Wat beteken die idioom: 'Die aap uit die mou laat'?", options: ["'n Geheim verklap", "'n Aap vrylaat", "Iemand kwaad maak", "Om te jok"], answer: "'n Geheim verklap", explanation: "Hierdie idioom beteken om 'n geheim of die waarheid te onthul." },
            { question: "Wat beteken: 'Die spyker op die kop slaan'?", options: ["Presies reg wees", "'n Spyker inslaan", "Iemand seermaak", "Gelukkig wees"], answer: "Presies reg wees", explanation: "Dit beteken om iets presies reg te sê of te doen." },
            { question: "Identifiseer die tipe beeldspraak: 'Die see is 'n kwaai hond vandag.'", options: ["Metafoor", "Vergelyking", "Personifikasie", "Hiperbool"], answer: "Metafoor", explanation: "Dit is 'n metafoor omdat die see direk met 'n kwaai hond vergelyk word sonder om 'soos' of 'nes' te gebruik." },
            { question: "Identifiseer die personifikasie: 'Die wind huil om die hoeke van die huis.'", options: ["Die wind huil", "om die hoeke", "van die huis", "Die wind"], answer: "Die wind huil", explanation: "Dit is personifikasie omdat die menslike aksie 'huil' aan die wind gegee word." },
            { question: "Watter van die volgende is 'n voorbeeld van 'n vergelyking?", options: ["Hy is so sterk soos 'n leeu.", "Hy is 'n leeu.", "Die leeu brul.", "Die leeu se krag is groot."], answer: "Hy is so sterk soos 'n leeu.", explanation: "Hierdie sin gebruik die woord 'soos' om die man met 'n leeu te vergelyk." }
        ]
    },
    {
        name: "Skryfvaardighede",
        questions: [
            { question: "Wat is die eerste stap in die skryfproses?", options: ["Redigering", "Beplanning", "Publisering", "Skryf van die finale kopie"], answer: "Beplanning", explanation: "Jy moet altyd eers beplan waaroor jy gaan skryf." },
            { question: "Watter sin is 'n goeie onderwerp-sin (topic sentence) vir 'n paragraaf oor honde?", options: ["My hond se naam is Fido.", "Honde is wonderlike troeteldiere om baie redes.", "Katte is ook oulike diere.", "Honde blaf."], answer: "Honde is wonderlike troeteldiere om baie redes.", explanation: "'n Onderwerp-sin stel die hoofgedagte van die paragraaf bekend." },
            { question: "Wat is die doel van 'n slotparagraaf?", options: ["Om nuwe inligting bekend te stel", "Om die hoofpunte op te som en die skryfstuk af te sluit", "Om die leser deurmekaar te maak", "Om die inleiding te herhaal"], answer: "Om die hoofpunte op te som en die skryfstuk af te sluit", explanation: "Die slot bring alles bymekaar en gee 'n gevoel van afsluiting." },
            { question: "Rangskik hierdie sinne in 'n logiese volgorde: (A) Tweedens, gooi jy die eiers in die pan. (B) Eerstens, smelt jy botter in 'n warm pan. (C) Laastens, geniet jy jou heerlike roereier.", options: ["A, B, C", "B, A, C", "C, A, B", "B, C, A"], answer: "B, A, C", explanation: "Instruksies moet in 'n logiese, stap-vir-stap volgorde wees." },
            { question: "Watter van die volgende is die beste vir 'n formele brief?", options: ["Haai daar!", "Liewe Mnr. De Beer,", "Hoe gaan dit?", "Tjommie,"], answer: "Liewe Mnr. De Beer,", explanation: "'Liewe' gevolg deur 'n titel en van is die standaard formele groet." }
        ]
    },
    {
        name: "Leesbegrip 1: Die Meerkat",
        comprehension: {
            text: "Die Kalahari-woestyn is 'n groot, droë gebied in Suider-Afrika. Ten spyte van die min reën, is daar baie unieke diere wat hier aangepas het om te oorleef. Een so 'n dier is die meerkat. Meerkatte is klein roofdiere wat in groot familiegroepe, of 'bendes', woon. Hulle werk saam om kos te soek en om hulself teen gevare te beskerm. Een meerkat staan altyd wag, regop op sy agterpote, terwyl die ander grawe vir insekte en klein reptiele. As die wagter 'n roofdier soos 'n arend of 'n jakkals sien, gee hy 'n skerp fluitgeluid en almal hardloop na die naaste gat in die grond.",
            questions: [
                { question: "Waar is die Kalahari-woestyn?", type: "comprehension", options: ["Noord-Afrika", "Suider-Afrika", "Egipte", "Australië"], answer: "Suider-Afrika", explanation: "Die teks sê duidelik: '...in Suider-Afrika'." },
                { question: "Wat is 'n 'bende' meerkatte?", type: "comprehension", options: ["'n Groep wat steel", "'n Familiegroep", "'n Klomp roofdiere", "'n Paartie meerkatte"], answer: "'n Familiegroep", explanation: "Die teks verduidelik dat hulle in 'groot familiegroepe, of 'bendes', woon'." },
                { question: "Hoe waarsku die wagter-meerkat die ander?", type: "comprehension", options: ["Hy skree hard", "Hy stamp sy voete", "Hy gee 'n skerp fluitgeluid", "Hy byt hulle"], answer: "Hy gee 'n skerp fluitgeluid", explanation: "Die teks sê: '...gee hy 'n skerp fluitgeluid'." },
                { question: "Wat eet meerkatte?", type: "comprehension", options: ["Plante en vrugte", "Gras en blare", "Insekte en klein reptiele", "Groot diere"], answer: "Insekte en klein reptiele", explanation: "Die teks noem dat hulle 'grawe vir insekte en klein reptiele'." },
                { question: "Hoekom staan een meerkat wag?", type: "comprehension", options: ["Hy is nie honger nie", "Hy is die leier", "Om die groep te beskerm teen gevare", "Hy is moeg gegrawe"], answer: "Om die groep te beskerm teen gevare", explanation: "Die wagter beskerm die groep teen 'gevare' soos roofdiere." }
            ]
        }
    },
    {
        name: "Leesbegrip 2: Die Groot Olifant",
        comprehension: {
            text: "Die Afrika-olifant is die grootste landdier op aarde. Hierdie reuse woon in familiegroepe wat troppe genoem word, en 'n ouer, wyse koei (vroulike olifant) is gewoonlik die leier. Sy word die matriarg genoem. Olifante is baie intelligent en het 'n ongelooflike geheue. Hulle kommunikeer met mekaar oor lang afstande deur lae-frekwensie geluide te gebruik wat mense nie kan hoor nie. Olifante speel ook 'n belangrike rol in hul omgewing. Deur bome om te stoot en te eet, skep hulle oop grasvelde waar ander diere kan wei. Hulle versprei ook sade in hul mis, wat help om nuwe plante te laat groei.",
            questions: [
                { question: "Wat is die naam van die leier van 'n olifanttrop?", type: "comprehension", options: ["Die koning", "Die president", "Die matriarg", "Die kaptein"], answer: "Die matriarg", explanation: "Die teks noem dat die leier 'die matriarg genoem' word." },
                { question: "Hoe kommunikeer olifante oor lang afstande?", type: "comprehension", options: ["Deur te skree", "Met lae-frekwensie geluide", "Deur te trompetter", "Met hul ore"], answer: "Met lae-frekwensie geluide", explanation: "Die teks sê hulle gebruik 'lae-frekwensie geluide'." },
                { question: "Noem een manier hoe olifante hul omgewing help.", type: "comprehension", options: ["Hulle eet al die gras", "Hulle skep oop grasvelde", "Hulle jaag ander diere weg", "Hulle slaap baie"], answer: "Hulle skep oop grasvelde", explanation: "Die teks sê hulle skep oop grasvelde en versprei sade." },
                { question: "Watter titel word aan die Afrika-olifant gegee in die eerste sin?", type: "comprehension", options: ["Die koning van die oerwoud", "Die grootste landdier op aarde", "Die slimste dier", "Die vriendelike reus"], answer: "Die grootste landdier op aarde", explanation: "Die eerste sin sê: 'Die Afrika-olifant is die grootste landdier op aarde.'" },
                { question: "Wat is 'n trop?", type: "comprehension", options: ["'n Klomp bome", "'n Skool visse", "'n Familiegroep olifante", "'n Swerm voëls"], answer: "'n Familiegroep olifante", explanation: "Die teks definieer troppe as 'familiegroepe'." }
            ]
        }
    },
    {
        name: "Leesbegrip 3: Die Koning van die Fynbos",
        comprehension: {
            text: "Suid-Afrika se nasionale blom is die koningprotea. Hierdie pragtige blom, met sy groot kop en pienk, silweragtige blare, lyk soos 'n kroon. Die protea is deel van die fynbos-bioom, 'n unieke tipe plantegroei wat hoofsaaklik in die Wes-Kaap gevind word. Fynbosplante is spesiaal omdat baie van hulle vuur nodig het om te oorleef. Die hitte van 'n veldbrand laat die harde doppe van die protea-sade oopbars sodat nuwe plante kan groei. Die blom produseer ook baie soet nektar, wat 'n belangrike voedselbron is vir suikerbekkies en ander diere.",
            questions: [
                { question: "Wat is Suid-Afrika se nasionale blom?", type: "comprehension", options: ["Die roos", "Die sonneblom", "Die koningprotea", "Die lelie"], answer: "Die koningprotea", explanation: "Die eerste sin noem dat die nasionale blom die 'koningprotea' is." },
                { question: "In watter bioom word die protea hoofsaaklik gevind?", type: "comprehension", options: ["Die woud", "Die savanne", "Die fynbos", "Die woestyn"], answer: "Die fynbos", explanation: "Die teks sê dit is deel van die 'fynbos-bioom'." },
                { question: "Hoekom is vuur belangrik vir proteas?", type: "comprehension", options: ["Dit maak die blomme warm", "Dit help die sade om oop te bars", "Dit verbrand die ou plante", "Dit lok diere"], answer: "Dit help die sade om oop te bars", explanation: "Die teks verduidelik dat die hitte die 'harde doppe van die protea-sade oopbars'." },
                { question: "Watter diere eet die nektar van die protea?", type: "comprehension", options: ["Leeus en tiere", "Olifante en renosters", "Suikerbekkies en ander diere", "Slange en akkedisse"], answer: "Suikerbekkies en ander diere", explanation: "Die teks noem spesifiek 'suikerbekkies'." },
                { question: "Waarna lyk die proteablom volgens die teks?", type: "comprehension", options: ["'n Kroon", "'n Ster", "'n Bal", "'n Koppie"], answer: "'n Kroon", explanation: "Die teks sê dit 'lyk soos 'n kroon'." }
            ]
        }
    }
];
