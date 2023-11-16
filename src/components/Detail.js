import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F6CDB6C0EB2D77EB19BCADA31F85066E001A1F61FA68F4AC3356A73FE076477F/scale?width=1440&aspectRatio=1.78&format=jpeg"
                />
            </Background>

            <ImageTitle>
                <img alt=""
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/37D80C5D1AB0BA65C63588311EC60A07342F60F91D402C28B8E1137AF6A30549/scale?width=1440&aspectRatio=1.78"
                />
            </ImageTitle>

            <ContentMeta>
                <Control>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="" />
                        <span>PLAY</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="" />
                        <span>TRAILER</span>
                    </Trailer>
                </Control>
            </ContentMeta>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
            width: initial;
        }
    }

`;

const ImageTitle = styled.div`
    align-items: flex-end ;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30px;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img {
        max-width: 600px;
        min-width: 200px;
        width:35vw;
    }

`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Control = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    font-size:15px ;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content:center ;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border: none;
    color: rgb(0,0,0);

    img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }

  span {
    color: black;
  }
    
    
`;

const Trailer=styled(Player)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;

export default Detail;