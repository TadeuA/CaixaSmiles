import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-light: ${({ theme }) => theme.colors.light};
    --color-text: ${({ theme }) => theme.colors.text};
    --color-transparent: ${({ theme }) => theme.colors.transparent};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-inactive: ${({ theme }) => theme.colors.inactive};
    --color-dark: ${({ theme }) => theme.colors.dark};
    --color-input-text: ${({ theme }) => theme.colors['input-text']};
    --color-gradient-blue: ${({ theme }) => theme.colors['gradient-blue']};
    --font-nunito: ${({ theme }) => theme.fonts.nunito};
    --shadow-shadow: ${({ theme }) => theme.shadows.shadow};
    --padding-2-by-1: ${({ theme }) => theme.paddings['2-by-1']};
    --padding-bottom-no: ${({ theme }) => theme.paddings['no-bottom']};
    --size-2: ${({ theme }) => theme.sizes['2']};
    --size-3: ${({ theme }) => theme.sizes['3']};
    --size-4: ${({ theme }) => theme.sizes['4']};
    --size-6: ${({ theme }) => theme.sizes['6']};
    --size-8: ${({ theme }) => theme.sizes['8']};
    --size-14: ${({ theme }) => theme.sizes['14']};
    --size-15: ${({ theme }) => theme.sizes['15']};
    --size-20: ${({ theme }) => theme.sizes['20']};
    --size-40: ${({ theme }) => theme.sizes['40']};
    --size-135: ${({ theme }) => theme.sizes['135']};
    --size-159: ${({ theme }) => theme.sizes['159']};
    --size-400: ${({ theme }) => theme.sizes['400']};
    --gradient-blue: ${({ theme }) => theme.gradients.blue};
  }

  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:${({ theme }) => theme.colors.light};
    font:${({ theme }) => theme.fonts.nunito};
    color:${({ theme }) => theme.colors.text};
    --webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
    line-height: 0;
    transition: filter 0.5s;
    &:hover{
      filter:contrast(200%);
    }
  }
  input, select, text-area{
    font: ${({ theme }) => theme.fonts.nunito};
    padding-left:1rem;
    color: ${({ theme }) => theme.colors['input-text']};
    &::placeholder{
      filter:brightness(0.3);
    }
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight:600;
  }

  a{
    text-decoration: none;
  }

 [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }


  @media(max-width:1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width:720px){
    html{
      font-size: 87.5%;
    }
  }
`;
