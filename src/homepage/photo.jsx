import '../csshomepage/photo.css'
function Photo(){
    return(
        <>
        <div className="container-photo">
              <h1 className='photoH1'>BROWSE BY DRESS STYLE</h1>
              <img className='casual' src="/img/casual.jpg" alt="" />
              <h1 className='casualh1'>Casual</h1>
              <img className='formal' src="/img/formal.jpg" alt="" />
              <h1 className='Formalh1'>Formal</h1>
              <img className='party' src="/img/party.jpg" alt="" />
              <h1 className='Partyh1'>Party</h1>
              <img className='gym' src="/img/gym.jpg" alt="" />
              <h1 className='Gymh1'>Gym</h1>
        </div>
        </>
    )
}
export default Photo;