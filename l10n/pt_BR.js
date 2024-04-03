OC.L10N.register(
    "richdocumentscode",
    {
    "Built-in CODE Server" : "Servidor CODE incorporado",
    "Collabora Online - Built-in CODE Server" : "Servidor CODE incorporado - Collabora Online",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Servidor (CODE) Edição de Desenvolvimento do Collabora Online incorporado para testes locais e uso em não-produção",
    "**This app has to be installed and used together with the [Nextcloud Office](https://apps.nextcloud.com/apps/richdocuments) integration app.**\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\n* This app provides a built-in server with all of the document editing features of Collabora Online. \n* Easy to install, for personal use or for small teams. \n* A bit slower than a standalone server and without the advanced scalability features.\n\n**System Requirements:**\n- Linux running on ```x86-64``` or ```arm64/aarch64```\n- A ```glibc``` based distribution/container (```musl libc``` is **not** supported)\n- Fontconfig (```libfontconfig.so.1```)\n- Additional requirements can be found in [here](https://github.com/CollaboraOnline/richdocumentscode#richdocumentscode)\n          \n*The download is rather big so it is possible you will experience a time-out when installing via the web interface.* You can use the OCC command install the built-in server from the command-line instead:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)\n\nAdditional troubleshooting tips can be found [here](https://github.com/CollaboraOnline/richdocumentscode?tab=readme-ov-file#troubleshooting)." : "**Este aplicativo deve ser instalado e usado junto com o aplicativo de integração [Nextcloud Office](https://apps.nextcloud.com/apps/richdocuments).**\n\nCollabora Online é um poderoso pacote de escritório online baseado no LibreOffice com edição colaborativa, que suporta todos os principais formatos de documentos, planilhas e arquivos de apresentação e funciona em conjunto com todos os navegadores modernos.\n\n* Este aplicativo fornece um servidor integrado com todos os recursos de edição de documentos do Collabora Online. \n* Fácil de instalar, para uso pessoal ou para pequenas equipes. \n* Um pouco mais lento que um servidor independente e sem recursos avançados de escalabilidade.\n\n**Requisitos do Sistema:**\n- Linux rodando em ```x86-64``` ou ```arm64/aarch64```\n- Uma distribuição/container baseado em ```glibc``` (```musl libc``` **não** é suportado)\n- Fontconfig (```libfontconfig.so.1```)\n- Requisitos adicionais podem ser encontrados [aqui](https://github.com/CollaboraOnline/richdocumentscode#richdocumentscode)\n          \n*O download é bastante grande, então é possível que você experimente um tempo limite ao instalar através da interface da web.* Você pode usar o comando OCC para instalar o servidor integrado a partir da linha de comando:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nOnde `wwwrun` é o usuário do seu servidor web. Isto é ```www-data``` no Debian, Ubuntu e derivados, `wwwrun` em distribuições baseadas em SUSE, `apache` no Red Hat/Fedora e `http` no Arch Linux e derivados.\n\nAs atualizações podem ser feitas assim:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nClaro, alternativamente você pode aumentar o uso de memória e o tempo limite do PHP por padrão, consulte a [documentação do Nextcloud.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)\nDicas adicionais de solução de problemas podem ser encontradas [aqui](https://github.com/CollaboraOnline/richdocumentscode?tab=readme-ov-file#troubleshooting).",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Seu sistema é ARM64, mas você instalou a versão x86_64 do aplicativo. Exclua-a e",
    "install the correct version from the Nextcloud App Store." : "Instale a versão correta da Loja de Aplicativos Nextcloud.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Seu sistema é x86_64, mas você instalou a versão ARM64 do aplicativo. Exclua-a e",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Você tem o aplicativo Collabora Online ativado. Para mais informações e configurações, verifique:",
    "Administration settings > Nextcloud Office" : "Configurações de administração > Nextcloud Office",
    "The Built-in CODE Server is designed to work with the Nextcloud Office app." : "O servidor CODE integrado foi projetado para funcionar com o aplicativo Nextcloud Office.",
    "Install it from the Nextcloud App Store." : "Instale-o pela Loja de Aplicativos Nextcloud.",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Ocorreu um erro ao verificar a instalação do aplicativo Collabora Online. Você pode relatar este erro\n                com o rótulo: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
