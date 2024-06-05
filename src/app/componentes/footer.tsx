//componente footer com as informações

export default function Footer() {
    return (
      <footer className="bg-customColor text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} SOS Ocean</p>
          <p>Erick Lopes Silva RM - 553927, Gabriel Sá Bragança RM - 554064, Gustavo Henrique Camacho dos Santos RM - 554184. </p>
          <p>Turma: 1TDSZ</p>
          <p>https://github.com/ericklpps/global-solution-rwd</p>
        </div>
      </footer>
    )
  }