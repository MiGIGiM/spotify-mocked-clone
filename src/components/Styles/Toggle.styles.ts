import styled from 'styled-components';

export const SwitchLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: white;
`;

export const Switch = styled.div`
    position: relative;
    width: 60px;
    height: 28px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

    &:before {
        transition: 300ms all;
        content: '';
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    }
`;

export const SwitchInput = styled.input`
    display: none;

    &:checked + ${Switch} {
        background: ${({ theme }) => theme.colors.accent};

        &:before {
            transform: translate(32px, -50%);
        }
    }
`;
