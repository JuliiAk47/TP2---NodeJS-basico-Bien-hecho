export function concatInvert(t1,t2)
{
    const concat = t1 + t2;
    const arraystr = concat.split('')
    const invertidostr = arraystr.reverse('');
    return invertidostr.join('');
}
export function concatOnly(t1,t2)
{
    return t1 + t2;
}




/*module.exports = {
    concatInvert;
}*/