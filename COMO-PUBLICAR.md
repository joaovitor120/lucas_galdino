# Como subir para o GitHub

O repositório já está pronto: histórico criado, `.gitignore` configurado e o
remote `origin` apontando para `git@github.com:joaovitor120/lucas_galdino.git`.
Falta só o `push`, que precisa acontecer da sua máquina — a sessão que gerou o
projeto não tem credencial para esse repositório.

## Um comando

Descompacte o zip, entre na pasta e rode:

```bash
cd lucas-galdino-site
git push -u origin main
```

Se o repositório no GitHub já tiver algum commit (um README criado na hora de
abrir o repo, por exemplo), use:

```bash
git push -u --force-with-lease origin main
```

`--force-with-lease` é mais seguro que `--force`: ele recusa o push se alguém
tiver enviado algo que você ainda não viu.

## Se preferir usar HTTPS em vez de SSH

```bash
git remote set-url origin https://github.com/joaovitor120/lucas_galdino.git
git push -u origin main
```

## O commit está no seu nome?

O commit foi criado como `Daniel Pimentel <dpcsantos@gmail.com>`. Para trocar a
autoria antes de enviar:

```bash
git -c user.name="Seu Nome" -c user.email="seu@email.com" commit --amend --reset-author --no-edit
```

## Depois do push

Para publicar o site, a Vercel é o caminho mais direto: importe o repositório em
vercel.com/new e não há nada a configurar — o projeto não usa variáveis de
ambiente, banco nem API. O domínio `lucasgaldinopalestras.com` é apontado depois,
em Settings → Domains.

Antes de trocar o site em produção, confira os itens de `RESUMO-DO-PROJETO.md`
(seção 10) — principalmente copiar `media-kit-lucas-galdino.pdf` para `public/`,
senão o link do mídia kit fica quebrado.
