// veiculos.js - Estoque automatizado configurado para o padrão com Ano de 1 a 15
const estoqueJF = [
    {
        id: "captiva2011",
        marca: "Chevrolet",
        modelo: "Captiva Sport 2.4 2011",
        ano: "2011/2011",
        km: "220.000",
        cambio: "Automático",
        combustivel: "Gasolina",
        preco: "40.900",
        condicoes: "Completa, multimidia, volante multifuncional, bancos em couro, rodas de liga leve aro '16' revisada e impecável!",
        fotoCapa: "estoque/captiva2011.jpeg", 
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "captiva_2011", // Vai buscar por captiva_2011_1, captiva_2011_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
    {
        id: "toro2020",
        marca: "Fiat",
        modelo: "Toro Fredon 1.8 at9 2020",
        ano: "2019/2020",
        km: "101.000",
        cambio: "Automático",
        combustivel: "Flex",
        preco: "97.900",
        condicoes: "Único dono, revisada na concessionária, tração 4x4, pneus novos.",
        fotoCapa: "estoque/fiattoro2020.jpeg",
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "toro_2020",    // Vai buscar por toro_2020_1, toro_2020_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
     {
        id: "santafe2012",
        marca: "Hyundai",
        modelo: "Santa Fé GLS 3.5 V6 4X4 2012",
        ano: "2011/2012",
        km: "133.000",
        cambio: "Automático",
        combustivel: "Gasolina",
        preco: "55.000",
        condicoes: "Completa, multimidia de 10 polegadas, volante multifuncional, bancos em couro, rodas de liga leve aro '18', cautelar 100% Aprovada revisada e impecável!",
        fotoCapa: "estoque/santafe2012.jpeg", 
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "santafe_2012", // Vai buscar por santafe_2012_1, santafe_2012_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
    {
        id: "compass2018",
        marca: "Jeep",
        modelo: "Compass Limited 2.0 2018",
        ano: "2018/2018",
        km: "126.000",
        cambio: "Automática",
        combustivel: "Flex",
        preco: "95.900",
        condicoes: "Completa, bancos em couro, multimidia com volante multifuncional, chave presencial Star/Stop, ótima motorização para quem ama viajar, revisada e com garantia de 90 dias no motor e câmbio!",
        fotoCapa: "estoque/compass2018.jpeg", 
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "compass_2018", // Vai buscar por santafe_2012_1, santafe_2012_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
    {
        id: "paliofire2010",
        marca: "Fiat",
        modelo: "Palio Fire 1.0 economic 2010",
        ano: "2010/2010",
        km: "170.000",
        cambio: "Manual",
        combustivel: "Flex",
        preco: "25.500",
        condicoes: "Básico, motor fire flex 1.0, ótima economia na cidade, bancos em bom estado, limpador e desembaçador traseiro, revisado e ótima opção para quem busca conforto com economia!",
        fotoCapa: "estoque/paliofire2010.jpeg", 
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "palio_2010", // Vai buscar por santafe_2012_1, santafe_2012_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
    {
        id: "gol2009",
        marca: "VolksWagen",
        modelo: "Gol Trend 1.0 2009",
        ano: "2009/2009",
        km: "103.000",
        cambio: "Manual",
        combustivel: "Flex",
        preco: "22.500",
        condicoes: "Básico, interior em ótimo estado, som com bluetooth, manual e chave reserva, segundo dono, ótima para quem procura um carro duradouro e com muita economia, revisado e com garantia de 90 dias no motor e câmbio!",
        fotoCapa: "estoque/gol2009.jpeg", 
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "gol_2009", // Vai buscar por santafe_2012_1, santafe_2012_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
    {
        id: "ka2010",
        marca: "Ford",
        modelo: "Ká hatch 1.0 2010",
        ano: "2009/2010",
        km: "66.000",
        cambio: "Manual",
        combustivel: "Flex",
        preco: "23.500",
        condicoes: "Básico, interior em ótimo estado, som com bluetooth, segundo dono, ótima para quem procura muita economia, revisado e com garantia de 90 dias no motor e câmbio!",
        fotoCapa: "estoque/ka2010.jpeg", 
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "ka_2010", // Vai buscar por santafe_2012_1, santafe_2012_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
    {
        id: "celta2010",
        marca: "Chevrolet",
        modelo: "celta life 1.0 2010",
        ano: "2010/2010",
        km: "220.000",
        cambio: "Manual",
        combustivel: "Flex",
        preco: "25.500",
        condicoes: "Básico, interior em ótimo estado, bancos do onix, ar condicionado gelando, ótima para quem procura muita economia para usar no dia-a-dia, revisado e com garantia de 90 dias no motor e câmbio!",
        fotoCapa: "estoque/celta2010.jpeg", 
        // CONFIGURAÇÃO AUTOMÁTICA ADAPTADA:
        prefixoFotos: "celta_2010", // Vai buscar por santafe_2012_1, santafe_2012_2...
        maxFotos: 15                  // Varre a pasta procurando até 15 fotos
    },
];


// O RESTANTE DO CÓDIGO DA FUNÇÃO DEBAIXO CONTINUA IGUAL...


// Configura a página principal para mandar para a página de detalhes ao clicar
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('container-estoque');
    if (!container) return;
    container.innerHTML = ''; 

    estoqueJF.forEach(carro => {
        const linkW = `whatsapp://send?phone=5515981188659&text=${encodeURIComponent('Olá Junior! Gostaria de mais detalhes sobre o veículo ' + carro.marca + ' ' + carro.modelo + ' no valor de R$ ' + carro.preco + ' que vi no catálogo.')}`;
        
        container.innerHTML += `
            <div style="background-color: #ffffff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.12); display: flex; flex-direction: column; position: relative; border: 1px solid #e2e8f0; text-align: left; width: 320px; box-sizing: border-box; font-family: system-ui, sans-serif; margin-bottom: 5px;">
                <div style="position: absolute; top: 12px; left: -32px; background-color: #ff0043; color: #ffffff; font-size: 10px; font-weight: bold; padding: 5px 35px; transform: rotate(-45deg); z-index: 2; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">DESTAQUE</div>
                
                <a href="detalhes.html?carro=${carro.id}" style="display: block; width: 100%; height: 210px; text-decoration: none;">
                    <div style="width: 100%; height: 100%; background-image: url('${carro.fotoCapa}'); background-size: cover; background-position: center; background-color: #e2e8f0; cursor: pointer;"></div>
                </a>

                <div style="padding: 18px; display: flex; flex-direction: column; flex: 1;">
                    <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #4a5568; font-weight: 600; line-height: 1.4; min-height: 40px; text-transform: uppercase;"><strong>${carro.marca}</strong> - ${carro.modelo}</h3>
                    <div style="margin: 0 0 15px 0; font-size: 22px; font-weight: 800; color: #ff0043;">R$ ${carro.preco}</div>
                    
                    <p style="font-size: 12px; color: #718096; margin-bottom: 12px; font-style: italic;">${carro.condicoes}</p>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px 4px; margin-bottom: 20px; font-size: 13px; color: #4a5568; border-top: 1px solid #edf2f7; padding-top: 12px;">
                        <div>⚙️ ${carro.cambio}</div> <div>⏱️ ${carro.km} km</div> <div>📅 ${carro.ano}</div> <div>⛽ ${carro.combustivel}</div>
                    </div>
                    <a href="${linkW}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; background-color: #25d366; color: #ffffff; text-decoration: none; font-weight: bold; padding: 12px; border-radius: 4px; text-align: center; font-size: 16px; margin-top: auto;">Whatsapp 🟢</a>
                </div>
            </div>
        `;
    });
});
