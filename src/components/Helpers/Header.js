import santi from '../imagenes/santi.jpg'
   
   const Header = ()=>{
    
    return (
        
        
        <header className="header" >
            
<nav class="navbar bg-success.bg-gradient">
       <section class="container-fluid">
       <img className='imgg' src={santi}alt="imgg" />
   <a className='logo'href="">Home</a>
   <a className='logo'href="">Cliente</a>
   <a className='logo'href="">Productos </a>
    <a className='logo'href="">Proveedores</a>


    <button class="btn-perfil" type="button" value="Salir">SALIR</button>
    </section>
    </nav>
        
   
   </header>


    )

}
export default Header;
        
   
        
