function convertPtBrDateToISODate(ptBrDate)
{
    var partes = ptBrDate.split('/');
    var data = new Date(partes[2], partes[1] - 1, partes[0]);
    return data.toISOString();
}