//arrumar responsividade do site

export default function Page() {
  return (
    <>
      <main className="bg-white container mx-auto py-10 px-4">
        <h1 className="text-center text-6xl font-bold mb-6">Quem somos?</h1>
        <div className="text-center">
          <img src="logo_png_certo.png" alt="Ocean" className="mx-auto w-full max-w-lg " />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <section className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Sobre Nós</h2>
            <p>
              A <span className="font-bold">SOS Ocean</span> é uma organização não governamental dedicada à preservação e limpeza dos oceanos. Fundada com o propósito de combater a crescente poluição marinha, nossa missão é proteger a biodiversidade e garantir um futuro sustentável para nossos mares e praias.
            </p>
          </section>

          <section className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Nossa Missão</h2>
            <p>
              A poluição dos oceanos é uma crise ambiental que ameaça a vida marinha, a saúde humana e o clima global. Na SOS Ocean, nos comprometemos a enfrentar este desafio por meio de ações diretas e educativas. Nossa principal função é a limpeza e coleta de resíduos em áreas de praia, uma tarefa crucial para impedir que o lixo chegue aos oceanos e prejudique a vida marinha.
            </p>
          </section>

          <section className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">O Que Fazemos</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">Limpeza de Praias: Organizamos mutirões de limpeza em praias, retirando toneladas de lixo e resíduos que, de outra forma, poluiriam os oceanos.</li>
              <li className="mb-2">Educação Ambiental: Promovemos campanhas de conscientização sobre a importância de reduzir, reutilizar e reciclar, incentivando práticas sustentáveis entre as comunidades locais.</li>
              <li className="mb-2">Pesquisa e Monitoramento: Colaboramos com cientistas e pesquisadores para monitorar os níveis de poluição e estudar seus impactos no ecossistema marinho.</li>
              <li className="mb-2">Parcerias e Colaborações: Trabalhamos junto a outras ONGs, empresas e governos para implementar soluções eficazes contra a poluição marinha.</li>
            </ul>
          </section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <section className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">Como Você Pode Ajudar</h2>
            <p>A batalha contra a poluição dos oceanos é contínua, e precisamos do seu apoio. Existem várias maneiras de contribuir para nossa causa:</p>
            <ul className="list-disc list-inside">
              <li className="mb-2">Voluntariado: Participe de nossas atividades de limpeza de praias e eventos educativos.</li>
              <li className="mb-2">Doações: Contribua financeiramente para apoiar nossos projetos e iniciativas.</li>
              <li className="mb-2">Parcerias: Se você representa uma empresa ou organização, junte-se a nós em parcerias que promovam a sustentabilidade.</li>
            </ul>
          </section>

          <section className="bg-white p-6 relative">
            <h2 className="text-3xl font-bold mb-4 text-center">Junte-se a Nós</h2>
            <p>Cada ação conta na luta contra a poluição dos oceanos. Junte-se à SOS Ocean e faça parte de um movimento global para preservar a beleza e a saúde de nossos mares. Juntos, podemos garantir que as futuras gerações herdem um planeta mais limpo e saudável, pois nossa praia, nosso compromisso.</p>
            <div className="text-center mt-4">
              <a href="/voluntarios" className="bg-customColor text-white px-4 py-2 rounded-md hover:bg-blue-700">Saiba Mais</a>
            </div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-gray-300 to-transparent"></div>
          </section>
        </div>
      </main>
    </>
  );
}