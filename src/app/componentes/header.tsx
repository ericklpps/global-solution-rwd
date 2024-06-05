import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-customColor text-white py-6">
      <div className="container mx-auto flex items-center">
        <img src="/logo-fundo-azul.png" alt="Ocean" className="h-12 mr-6" />      
        <nav>
          <ul className="flex space-x-6 text-lg font-semibold items-center">
            <li>
              <Link href='/' className='hover:underline'>Quem somos?</Link>
            </li>
            <li>
              <Link href='/doacoes' className="hover:underline">
                Doe
              </Link>
            </li>
            <li>
              <Link href='/acoes' className='hover:underline'>Ações</Link>
            </li>
            <li>
              <Link href='/voluntarios' className='hover:underline'>Voluntários</Link>
            </li>
            <li>
              <Link href='/compartilhe' className='hover:underline'>Compartilhe</Link>
            </li>
            <li>
              <Link href='/login' className='hover:underline'>Login</Link>
            </li>
            <li>
              <Link href='/cadastro' className='hover:underline'>Cadastre-se</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
