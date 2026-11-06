# Jogos 60 Minutos · TJDFT

Pasta de publicação (Vercel). Cada atualização enviada para o repositório no GitHub é publicada sozinha.

- `index.html` — página de entrada com senha (só para o staff): escolhe o jogo.
- `enigma/index.html` — O Enigma dos Resultados (gerado por `enigma/teste/build_teste.py`).
- `enigma-v1/index.html` — BACKUP da versão 1 do Enigma (até 06/11/2026, antes dos ajustes do teste com a cliente). Jogadores `/enigma-v1/`, staff `/enigma-v1/?papel=staff`.
- `ciberseguranca/index.html` — Missão Cibersegurança (gerado por `teste/build_teste.py` do pacote dela).
- `vercel.json` — sem cache nos arquivos (atualização aparece na hora) e fora dos buscadores.

Links dos jogadores: `/enigma/` e `/ciberseguranca/` (abrem direto o jogo, sem a página de entrada).
Staff: `/enigma/?papel=staff` e `/ciberseguranca/?papel=staff` (senha do staff de cada jogo).
