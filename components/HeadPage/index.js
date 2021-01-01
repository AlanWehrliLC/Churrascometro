import Head from 'next/head'

function HeadPage(props){
    const title = props.title
    return(
        <Head title={title}>
            <title>{title}</title>
        </Head>
    )
}  

export default HeadPage