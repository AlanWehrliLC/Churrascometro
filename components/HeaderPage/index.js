import GlobalButton from '../GlobalButton'

function HeaderPage(){
    return (
        <header>
            <div className='headerGlobal'>

                <img className="headerGlobalImageLogo" src="/assets/icon-kettle.png" alt="Logo" />

                <div className='headerGlobalDivAlignment'>
                    <div className='headerGlobalDivButton'>
                        <GlobalButton text='https://bomchurrascobom.com.br/'>Home</GlobalButton>
                    </div>

                    <div className='headerGlobalDivButton'>
                        <GlobalButton text='https://bomchurrascobom.com.br/whichIs'>Churrasco?</GlobalButton>
                    </div>

                    <div className='headerGlobalDivButton'>
                        <GlobalButton text='/'>Churrascômetro</GlobalButton>
                    </div>
                </div>
                
             </div>
        </header>
    )
}

export default HeaderPage