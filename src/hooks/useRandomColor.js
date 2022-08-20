

const colorPalet = [{button:'#5F4B8BFF', icon:'#E69A8DFF'},
                     {button:'#A07855FF', icon:'#D4B996FF'},
                     {button:'#6E6E6DFF', icon:'#FAD0C9FF'},
                     {button:'#D64161FF', icon:'#435E55FF'},
                     {button:'#755139FF', icon:'#F2EDD7FF'},
                     {button:'#D7C49EFF', icon:'#343148FF'},
                     {button:'#343148FF', icon:'#D7C49EFF'},
                     {button:'#567572FF', icon:'#964F4CFF'},
                     {button:'#696667FF', icon:'#cf8a87'},
                     {button:'#343148FF', icon:'#D7C49EFF'}];

export const useRandomColor = () => {

    const color = () => colorPalet[Math.floor(Math.random() * colorPalet.length)]

    return {

        color:color()
    }
}