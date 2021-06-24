`
  <button id="btn-close-customer" type="button" class="btn btn-close" aria-label="Close">X</button>
  <h1>Criar cliente</h1>
  <form id="form-customer">
      
      <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" id="name" class="form-control" required autofocus/>        
      </div>    
      
      <div class="form-group">
          <label for="city">Cidade</label>
          <input type="text" id="city" class="form-control" required/>
      </div>
      
      <button class="btn btn-primary" type="submit">Criar</button>
  </form>

  <br>
  <br>

  <h1>Lista de cliente</h1>
  <div id="customersView"></div>
`;
