<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="_Notestone_API_REST_0"></a>📝 Notestone API REST</h1>
<p class="has-line-data" data-line-start="2" data-line-end="4">Bem-vindo à API REST do <strong>Notestone</strong>, um sistema eficiente para criação, organização e compartilhamento de notas.<br>
A API permite que os usuários gerenciem suas notas, adicionem tags e compartilhem com outros usuários de forma segura.</p>
<hr>
<h2 class="code-line" data-line-start=7 data-line-end=8 ><a id="_Recursos_7"></a>🚀 Recursos</h2>
<p class="has-line-data" data-line-start="9" data-line-end="13">✅ Cadastro e autenticação de usuários<br>
✅ Criação, edição e exclusão de notas<br>
✅ Organização de notas com tags<br>
✅ Compartilhamento de notas com outros usuários</p>
<hr>
<h2 class="code-line" data-line-start=16 data-line-end=17 ><a id="_Rotas_da_API_REST_16"></a>📌 Rotas da API REST</h2>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Método</th>
<th>Rota</th>
<th>Descrição</th>
<th>Autenticação</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>POST</strong></td>
<td><code>/auth/register</code></td>
<td>Cadastro de usuário</td>
<td>❌</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td><code>/auth/login</code></td>
<td>Login e retorno do token JWT</td>
<td>❌</td>
</tr>
<tr>
<td><strong>GET</strong></td>
<td><code>/notas</code></td>
<td>Lista todas as notas do usuário</td>
<td>✅</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td><code>/notas</code></td>
<td>Cria uma nova nota</td>
<td>❌</td>
</tr>
<tr>
<td><strong>GET</strong></td>
<td><code>/notas/:id</code></td>
<td>Obtém uma nota específica</td>
<td>❌</td>
</tr>
<tr>
<td><strong>PUT</strong></td>
<td><code>/notas/:id</code></td>
<td>Atualiza uma nota</td>
<td>❌</td>
</tr>
<tr>
<td><strong>DELETE</strong></td>
<td><code>/notas/:id</code></td>
<td>Remove uma nota</td>
<td>❌</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td><code>/notas/:id/tags</code></td>
<td>Adiciona uma tag à nota</td>
<td>❌</td>
</tr>
<tr>
<td><strong>GET</strong></td>
<td><code>/tags</code></td>
<td>Lista todas as tags do usuário</td>
<td>❌</td>
</tr>
<tr>
<td><strong>POST</strong></td>
<td><code>/compartilhar</code></td>
<td>Compartilha nota com outro usuário</td>
<td>❌</td>
</tr>
</tbody>
</table>
<hr>
<h2 class="code-line" data-line-start=33 data-line-end=34 ><a id="_Tecnologias_Utilizadas_33"></a>🔧 Tecnologias Utilizadas</h2>
<p class="has-line-data" data-line-start="35" data-line-end="36">A API do Notestone foi desenvolvida utilizando tecnologias modernas para garantir segurança, escalabilidade e desempenho.</p>
<ul>
<li class="has-line-data" data-line-start="37" data-line-end="38"><strong>Node.js</strong> - Ambiente de execução JavaScript para o backend</li>
<li class="has-line-data" data-line-start="38" data-line-end="39"><strong>Express.js</strong> - Framework web rápido e minimalista</li>
<li class="has-line-data" data-line-start="39" data-line-end="40"><strong>JWT (JSON Web Token)</strong> - Autenticação segura de usuários</li>
<li class="has-line-data" data-line-start="40" data-line-end="41"><strong>PostgreSQL</strong> - Banco de dados relacional para armazenamento eficiente</li>
<li class="has-line-data" data-line-start="41" data-line-end="43"><strong>Sequelize</strong> - ORM para facilitar a manipulação do banco de dados</li>
</ul>
<hr>
<h2 class="code-line" data-line-start=45 data-line-end=46 ><a id="_Instalao_e_Execuo_45"></a>🛠️ Instalação e Execução</h2>
<h3 class="code-line" data-line-start=47 data-line-end=48 ><a id="_Requisitos_47"></a>🔹 Requisitos</h3>
<p class="has-line-data" data-line-start="49" data-line-end="50">Antes de começar, certifique-se de ter instalado:</p>
<ul>
<li class="has-line-data" data-line-start="51" data-line-end="52"><strong>Node.js</strong> (v14+)</li>
<li class="has-line-data" data-line-start="52" data-line-end="54"><strong>PostgreSQL</strong></li>
</ul>
<h3 class="code-line" data-line-start=54 data-line-end=55 ><a id="_Configurao_54"></a>🔹 Configuração</h3>
<p class="has-line-data" data-line-start="56" data-line-end="57">Clone o repositório e instale as dependências:</p>
<pre><code class="has-line-data" data-line-start="59" data-line-end="62" class="language-sh">git <span class="hljs-built_in">clone</span> https://github.com/Eliel-DM/notestone.git
<span class="hljs-built_in">cd</span> notestone
npm install
</code></pre>
