<div id="app">
  <div class="header">
    <h2>Comics</h2>
    <div>
      <button @click="showCart = !showCart" v-show="!verified">
        {{ items.length + (items.length > 1 || items.length === 0 ? " items" : " item") }}
      </button>
    </div>
  </div>
  <div class="cart" v-show="showCart">
    <div v-show="items.length > 0">
      <ul>
        <li v-for="item in items" transition="fade">
          <p><strong>{{ item.quantity }}</strong> - {{ item.name }} <i class="fa fa-trash" @click="removeFromCart(item)"></i></p>
        </li>
      </ul>
      <div><button @click="verified = true, showCart = false">Check out</button></div>
    </div>
    <div v-show="items.length === 0">
      <p>Your cart is empty!</p>
    </div>
  </div>
  <div class="container">
    <div class="shop" v-show="!verified">
      <h3>New Arrivals</h3>
      <ul>
        <li v-for="item in shop">
          <div>
            <h5>{{ item.name }}</h5>
            <p>${{ item.price }}</p>
            <button @click="addToCart(item)">Add to cart</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="checkout" v-show="verified">
      <h3>Your Cart</h3>
      <h5 v-for="item in items"><strong>{{ item.quantity }}</strong> - {{ item.name }}<span>${{ item.price * item.quantity }}</span></h5>
      <hr />
      <div class="row">
        <div class="u-pull-right">
          <h5>Total: <span>{{ total | currency }}</span></h5>
          <button>Looks Good</button>
        </div>
      </div>
    </div>
  </div>
</div>