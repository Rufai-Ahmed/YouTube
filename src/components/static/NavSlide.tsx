import styled from "styled-components";
import NavComp from "./NavComp";

// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero cumque nesciunt vel! Quasi expedita veritatis dignissimos, officia, impedit tempore veniam doloremque illum mollitia ipsum nostrum debitis aut animi quod fugiat fuga cum illo similique nihil obcaecati a corporis amet aperiam? Consectetur eos, libero animi aut ducimus cupiditate fugit, provident doloribus ipsam dignissimos debitis impedit expedita quis autem. Iusto nesciunt voluptatibus molestiae minima sint, veritatis nihil aut pariatur aspernatur officia voluptate, perspiciatis architecto rerum placeat magnam dolorum deleniti impedit laudantium rem, tempora cum voluptates provident praesentium! Esse illum dolores sequi eligendi doloremque minus distinctio voluptatem iusto architecto provident! Molestiae, similique natus.

const NavSlide = ({}: any) => {
  return (
    <Container>
      <NavComp
        bg="i"
        text="All"
        onClick={() => {
          localStorage.setItem("cat", JSON.stringify("all"));
          window.location.reload();
        }}
      />

      <NavComp
        text="Music"
        onClick={() => {
          localStorage.setItem("cat", JSON.stringify("music"));
          window.location.reload();
        }}
      />
      <NavComp
        text="Gaming"
        onClick={() => {
          localStorage.setItem("cat", JSON.stringify("gaming"));
          window.location.reload();
        }}
      />
      <NavComp
        text="African"
        onClick={() => {
          localStorage.setItem("cat", JSON.stringify("african"));
          window.location.reload();
        }}
      />
      <NavComp
        text="News"
        onClick={() => {
          localStorage.setItem("cat", JSON.stringify("news"));
          window.location.reload();
        }}
      />
      <NavComp
        text="Computer"
        onClick={() => {
          localStorage.setItem("cat", JSON.stringify("computer"));
          window.location.reload();
        }}
      />
    </Container>
  );
};

export default NavSlide;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
`;
