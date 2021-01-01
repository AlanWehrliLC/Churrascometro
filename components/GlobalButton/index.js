import Link from 'next/link'

function GlobalButton(props){
    const textLink = props.text
    
    return (
        <div className='GlobalButton'>
            <Link href={textLink}>
                <a>{props.children}</a>
            </Link>
        </div>
    )
}

export default GlobalButton