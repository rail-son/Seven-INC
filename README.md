<h1 align="center">Employee Management API</h1> 
<h2 align="center">Desafio Seven </h2>
<br>
<h2>Função: Desenvolvedor backend</h2>
<h2>Prazo para realização: 4 dias</h2>

<p>API desenvolvida por Railson da Silva Martins com o objetivo de fazer a criação de um novo módulo onde serão administrados os funcionários de uma empresa.</p>

<p>A API foi desenvolvida no padrão REST, no projeto foi feita a utilização do framework express para construção do servidor, dependências como body-parser para conversão e outros formatos, dotenv para leitura de arquivos '.env', mysql como banco de dados, cors e nodemon para reinicialização automática do servidor.</p>

<p>Cada funcionário que será cadastrado no sistema terá as seguintes informações:</p>
<ul>
    <li>ID (id);</li> 
    <li>Nome (name);</li> 
    <li>Cpf (document);</li> 
    <li>E-mail (email);</li> 
    <li>Telefone (phone);</li> 
    <li>Data de nascimento (birth_date);</li> 
    <li>Salário(salary);</li> 
    <li>Data de contratação (created_at);</li>
</ul>

<p>Com a API será possível: </p>
<ul>
    <li>Listar todos os funcionários da empresa;</li>
    <li>Exibir as informações de um funcionário cadastrado;</li>
    <li>Cadastrar um novo funcionário no sistema;</li>
    <li>Editar as informações de um funcionário;</li>
    <li>Realizar a deleção lógica de um funcionário.</li> 
</ul>

<p>Para execução da aplicação localmente será necessário a criação do DB e a configuração da senha no arquivo 'variaveis.env', ter instalado node.js e npm.</p>

<p>Nesse repositório além do projeto, disponibilizei um vídeo onde mostro a API em funcionamento e disponibilizei o arquivo da criação do banco já com 2 usuários cadastrados para teste.</p>

<p>Site utilizado para teste: https://resttesttest.com/</p>

<p>Conclusão: 04/01/2022</p>

<hr>

<h3>Cenário:</h3>
<p>O SVN é um ERP (sistema de gestão) que está sendo construído pelo time de desenvolvimento do Grupo Seven. Nele serão gerenciadas diversas entidades, tais como clientes, veículos, prestadores de serviços e contratos. O servidor da aplicação foi desenvolvido em NodeJS. O gerente de projetos solicitou a criação de um novo módulo onde serão administrados os funcionários da empresa.<p>