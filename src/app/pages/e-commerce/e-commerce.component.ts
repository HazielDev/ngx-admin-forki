import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products/products.service';
import { UsersService } from '../../services/users/users.service';
import { PostsService } from '../../services/posts/posts.service';
import { CommentsService } from '../../services/comments/comments.service';
import { TodosService } from '../../services/todos/todos.service';
import { CartsService } from '../../services/carts/carts.service';
import { QuotesService } from '../../services/quotes/quotes.service';
import { RecipesService } from '../../services/recipes/recipes.service';

@Component({
  selector: 'ngx-e-commerce',
  templateUrl: './e-commerce.component.html'
})
export class ECommerceComponent implements OnInit {

  products: any[] = [];
  users: any[] = [];
  posts: any[] = [];
  comments: any[] = [];
  todos: any[] = [];
  carts: any[] = [];
  quotes: any[] = [];
  recipes: any[] = [];

  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
    private postsService: PostsService,
    private commentsService: CommentsService,
    private todosService: TodosService,
    private cartsService: CartsService,
    private quotesService: QuotesService,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(data => {
      this.products = data.products;
    });

    this.usersService.getUsers().subscribe(data => {
      this.users = data.users;
    });

    this.postsService.getPosts().subscribe(data => {
      this.posts = data.posts;
    });

    this.commentsService.getComments().subscribe(data => {
      this.comments = data.comments;
    });

    this.todosService.getTodos().subscribe(data => {
      this.todos = data.todos;
    });

    this.cartsService.getCarts().subscribe(data => {
      this.carts = data.carts;
    });

    this.quotesService.getQuotes().subscribe(data => {
      this.quotes = data.quotes;
    });

    this.recipesService.getRecipes().subscribe(data => {
      this.recipes = data.recipes;
    });
  }
}
