import * as social_types from '../../enums/social'

const Login = (props: any) => {
    switch(props.app){
        case social_types.FACEBOOK:{
            return(
        
                <a href={props.link} className="ltd-color"><span className="fab fa-facebook fa-3x ltd-color1">&nbsp;</span></a>
            )
        }
        case social_types.INSTAGRAM:{
            return(
        
                <a href={props.link} className="ltd-color"><span className="fab fa-instagram fa-3x ltd-color1">&nbsp;</span></a>
            )
        }
        case social_types.TWITTER:{
            return(
        
                <a href={props.link} className="ltd-color"><span className="fab fa-twitter fa-3x ltd-color1">&nbsp;</span></a>
            )
        }
    }
    return(
        
        <a href={props.link} className="ltd-color"><span className="fab fa-facebook fa-3x ltd-color1">&nbsp;</span></a>
    )
}

export default Login
