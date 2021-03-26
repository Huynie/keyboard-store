import axios from 'axios';
// import keyboards from '../components/products.json';

export const imgLinks = async ()=> {
    try {
        let imgGroup = [];
        const keyboard = await axios.get('/api/items')
    
        keyboard.data.forEach((kb, ki) => {
                let set = [];
                kb.image.forEach((link, idx) => {
                    set.push(`import k${ki}-${idx}`);

                    // const name = `import k${ki}-${idx} from ..${link}`
                    // console.log(name.replace(/"/g,""))

                })
                imgGroup.push(set);
        });
         return imgGroup;
    } catch (err) {
        console.log(err)

    }
};

export const importing = async() => {
    const keyboard = await axios.get('/api/items')
    
        keyboard.data.forEach((kb, ki) => {
            kb.image.forEach((link, idx) => {
                return `import k${ki}-${idx} from ..${link}`;
            })
        })
}
