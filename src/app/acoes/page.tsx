export default function Acoes (){
  return(
  <>
  <main className="container mx-auto py-10 px-4">
    <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Ação Praia Grande</h1>
    <br/>
    <img src="lixo-praiag.jpg" alt="mostrar lixo no mar e praia" className="mx-auto w-full max-w-lg rounded-lg shadow-lg"/>
    <p className="text-gray-600 mt-2 text-center text-sm sm:text-base">Foto: Reprodução/ Rafael Pazzine - Praia Grande - SP</p>
    <br/>
    <section className="bg-gray-100 p-4 sm:p-6 rounded shadow-lg mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Sobre a Praia Grande</h2>
      <p className="mb-4">
        A Praia Grande é uma das praias mais movimentadas do litoral de São Paulo, sendo uma das mais próximas à capital paulista. Devido à sua proximidade com a cidade de São Paulo, a Praia Grande recebe um grande número de visitantes, especialmente nos finais de semana e feriados. Com esse grande fluxo de pessoas, a quantidade de lixo produzida também é significativa, o que representa um grande desafio para a manutenção da limpeza e preservação do local.
      </p>
      <p className="mb-4">
        Dados recentes mostram que a Praia Grande, em um feriado prolongado, pode produzir até 400 toneladas de lixo, sendo a maior parte composta por resíduos plásticos, embalagens de alimentos e garrafas de bebidas.
      </p>
    </section>
    <section className="bg-gray-100 p-4 sm:p-6 rounded shadow-lg mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Nosso Projeto</h2>
      <p className="mb-4">
        Estamos lançando um novo projeto de força-tarefa para a limpeza da Praia Grande. Este projeto envolve a extensão de várias praias da região, com pontos de coleta de lixo estratégicos para facilitar a manutenção da limpeza e a conscientização dos frequentadores sobre a importância da preservação ambiental.
      </p>
      <h3 className="text-xl sm:text-2xl font-bold mb-4">Pontos de Coleta nas Seguintes Praias:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Praia do Canto do Forte</li>
        <li>Praia do Boqueirão</li>
        <li>Praia da Guilhermina</li>
        <li>Praia da Aviação</li>
        <li>Praia da Vila Tupi</li>
        <li>Praia da Ocian</li>
        <li>Praia da Vila Mirim</li>
        <li>Praia do Balneário Maracanã</li>
      </ul>
      <p>Os pontos de coleta servem para separação e descarte de resíduos encontrados nos mares e areias</p>
      <p className="mb-4">
        Estamos aceitando voluntários para participar deste projeto. Se você deseja contribuir para a preservação das nossas praias e fazer parte dessa importante iniciativa, entre em contato conosco e saiba como você pode ajudar.
      </p>
      
      <div className="text-center mt-4">
        <a href="/voluntarios" className="bg-customColor text-white px-4 py-2 rounded-md hover:bg-blue-800">Clique para se voluntariar</a>
      </div>
    </section>
  </main>
  </>
  );
}
