import * as yup from 'yup';

let schema = yup.object().shape({
    title: yup.string().min(2).max(255).required(),
    image: yup.mixed().required(),
    tags: yup.array()
});

export default schema;