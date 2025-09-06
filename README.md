# Elitehub v2

Elitehub je stránka s návodmi pre hru Elite Dangerous, mierená pre českých a slovenských hráčov. Tento repozitár obsahuje novú verziu stránky, ktorá je postavená na novom dokumentačnom rámci [Starlight](https://starlight.astro.build/). Stará verzia stránky je stále dostupná na adrese [elitehub.eu](https://elitehub.eu).

## 🚀 Štruktúra projektu

Elitehub je postavený pomocou dokumentačného rámca [Starlight](https://starlight.astro.build/), ktorý používa [Astro](https://astro.build/).

Projekt je rozdelený nasledovne:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight hľadá `.md` or `.mdx` súbory v adresári `src/content/docs/`. Každý súbor je sprístupnený ako webová stránka na základe názvu súboru.

Obrázky sú v adresári `src/assets/` a do Markdown-u sa vkladajú pomocou relatívnej cesty.

Statické súbory, ako napríklad favicony sú v adresári `public/`.

## 🧞 Príkazy

Všetky príkazy sa spúšťajú z koreňového adresára projektu, z terminálu:

| Príkaz         | Akcia                                                |
| :------------- | :--------------------------------------------------- |
| `pnpm install` | Inštalácia závislostí                                |
| `pnpm dev`     | Spustí lokálny dev server na adrese `localhost:4321` |
| `pnpm build`   | Zostaví vašu produkčnú stránku do `./dist/`          |
| `pnpm preview` | Zobrazí zostavenú produkčnú stránku lokálne          |
| `pnpm format`  | Zformátuje súbory v repozitári                       |

## 📝 Prispievanie

Pre prispievanie do Elitehubu potrebujete účet na platforme Github a základné znalosti o systéme Git.
Ak chcete prispieť a neviete čím, pozrite si [zoznam otvorených úloh](https://github.com/jovanblazek/elitehub/issues) v repozitári. V prípade akýchkoľvek otázok nás môžete kontaktovať cez [Discord server](https://discord.gg/invite/a7Zsx6a).

1. Vytvorte si fork repozitára.
2. Otvorte repozitár vo vašom obľúbenom editore. Odporúčame Visual Studio Code, ale aj webový editor na Githube postačuje. Pre spustenie lokálneho servera použite príkazy `pnpm install` a následne `pnpm dev`.
3. Vykonajte svoje zmeny.
4. Commitnite a pushnite zmeny do vašeho forku.
5. Otvorte pull request do hlavného repozitára.

Všetko v repozitári používa anglický jazyk okrem samotných stránok, ktoré sú v slovenskom alebo českom jazyku.

Každá pomoc je vítaná. Ak chcete prispieť písaním stránok, nezabudnite si prečítať štylistickú príručku nižšie.

## 📚 Štylistická príručka

Pred otvorením pull requestu, prečítajte si štylistickú príručku. Ak vaše zmeny nebudú spĺňať štylistické pravidlá, nebudú prijaté.

### Rozdelenie stránok

Elitehub je rozdelený na 3 hlavné časti:

- Pre začiatočníkov
- Wiki
- Návody

Časť pre začiatočníkov je určená pre úplne nových hráčov, ktorí si ešte nekúpili alebo práve kúpili hru. Mala by obsahovať stručné a doležité informácie, bez potreby ísť do veľkých detailov.

Časť Wiki je určená pre pokročilých hráčov, ktorí už hru poznajú a chcú sa dozvedieť viac. Táto časť by mala obsahovať podrobné informácie o hre a jej mechanikách. Obsah by mal byť nestranný a objektívny.

Časť Návody je určená pre všetkých hráčov, ktorí chcú získať nové informácie o hre alebo sa dozvedieť viac o niektorých aspektoch hry. Táto časť by mala obsahovať návody, tipy a triky pre rôzne aktivity v hre. Jej štýl písania by mal byť voľnejší, niečo ako "blog".

### Štýl písania

1. Názvy súborov sú v anglickom jazyku a písané štýlom `kebab-case`.
2. Používajte súbory s príponou `.mdx`.
3. Všetky stránky by mali mať hlavičku `title` a `description`.
4. Obrázky sú v adresári `src/assets/` v rovnakom podadresári ako stránka ktorej patria a do Markdown-u sa vkladajú pomocou aliasu `@/assets/`. Názvy obrázkov by mali byť výstižné v kontexte stránky.
5. Dodržujte poradie nadpisov. Nadpis štvrtej úrovne nemôže byť pod nadpisom druhej úrovne.
6. Nadpisy by mali mať aspoň 2 slová a jednoznačne opisovať o čom je daný odsek.
7. Nadpis by nemal nasledovať po nadpise. Pod každým nadpisom by mal byť aspoň jeden odsek s textom alebo zoznam.
8. Stránky musia obsahovať všetky použité linky na konci súboru. Názvy linkov môžu byť v českom alebo slovenskom jazyku. Názov linku by mal byť výstižný.

Ako príklad si môžete pozrieť stránku [Bounty Hunting](src/content/docs/guides/professions/bounty-hunting.mdx).

Ak kopírujete text zo starej stránky, môžete si pomôcť [nástrojom pre preklad stránky do Markdownu](https://jsongpt.com/converter/url-to-markdown).
