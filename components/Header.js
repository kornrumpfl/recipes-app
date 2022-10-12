import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavigation>
        <Anchor>Home</Anchor>
        <Anchor>Dessert</Anchor>
        <Anchor>Veggie</Anchor>
      </StyledNavigation>
    </StyledHeader>
  );
}

const Anchor = styled.a`
  color: var(--text-secondary);
  &:hover {
    cursor: pointer;
    color: var(--text-primary);
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content:flex-end;
  gap: 2rem;
`;