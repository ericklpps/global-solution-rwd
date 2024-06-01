import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex justify-center items-center">
        <nav>
          <ul className="flex space-x-6 text-lg font-semibold items-center">
            <li>
              <Link href='/' className='hover:underline'>Quem somos?</Link>
            </li>
            <li>
              <Link href='doacoes' className="hover:underline">
                Doe
              </Link>
            </li>
            <li>
              <Link href='acoes' className='hover:underline'>Ações</Link>
            </li>
            <li>
              <Link href='/voluntarios' className='hover:underline'>Voluntários</Link>
            </li>
          </ul>
        </nav>
        
        <h1 className="text-2xl font-bold mx-4 bg-red-700">SOS Ocean</h1>
        
        <nav>
          <ul className="flex space-x-6 text-lg font-semibold items-center">
            <li className="mr-4">
              <Link href='/compartilhe' className='hover:underline'>Compartilhe</Link>
            </li>
            <li className="mr-4">
              <Link href='/feed' className='hover:underline'>Feed</Link>
            </li>
            <li className="mr-4">
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
