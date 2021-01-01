import Link from 'next/link'

export default function FooterPage(){
    return (
        <footer>
            <div className='divFooter'>
                <p>
                    Modelo de site criado para <Link href='https://github.com/AlanWehrliLC' ><a>Alan Wehrli</a></Link>
                    <p><a href='#'>Volta ao topo</a></p>
                </p>
            </div>
        </footer>
    )
}