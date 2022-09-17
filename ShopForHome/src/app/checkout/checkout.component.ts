import { Component, OnInit } from '@angular/core';
import { CartDisplayService } from '../cart-display.service';
import { DiscountService } from '../discount.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  public products: any = [];
  public grandTotal !: number;

  public code!: string;
  // public coupons: string[] = ["RKM10","SRJ20","DEB15","PAV30"];
  public coupons: string[] = [];
  msg: string = "";
  discount1!: number;
  final1!: number;
  total!: number;

  constructor(private cartService: CartService, private discountService: DiscountService, private cartDisplay: CartDisplayService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        // console.log(res)
        this.products = res;
        var myarr = JSON.stringify(res);
        this.grandTotal = this.cartService.getTotalPrice();
      })
  }




  // applyCoupon(){
  //   this.discountService.loadDiscount().subscribe(res=>{
  //     for(let c of res){
  //            this.coupons.push(c.dname);
  //     }
  //   },error=>{
  //     console.log("error is"+error)
  //   })

  //   console.log("the coupons is"+this.coupons)

  //   if(this.grandTotal<5000){
  //     this.msg="not applicable for the coupon";
  //   }
  //   else{

  //   for(var val of this.coupons){
  //     if(val==this.code){
  //       if(this.grandTotal>=5000 && this.grandTotal<=7000){
  //       if(this.code=="RKM10"){
  //         this.msg="discountof 10%";
  //         this.final1=  this.grandTotal-this.grandTotal*0.1
  //         break;

  //         }
  //     }
  //      else if(this.code=="SRJ20"){
  //       this.msg="discoun tof 20%"
  //       this.final1=  this.grandTotal-this.grandTotal*0.2
  //       break;

  //      }
  //      else if(this.code=="DEB15"){
  //       this.msg="discount of 30%"
  //       this.final1=this.grandTotal-this.grandTotal*0.5
  //       break;

  //      }
  //      else if(this.code="PAV30"){
  //       this.msg="discount of 40%"
  //       this.final1=this.grandTotal-this.grandTotal*0.3
  //       break;
  //      }
  //     }
  //     else{
  //      this.msg="invalid coupon code"
  //     }
  //   }
  // }

  // }


  applyCoupon() {

    if (this.grandTotal < 5000) {
      this.msg = "not applicable for coupon"
    }
    else {
      if (this.grandTotal >= 10000 && this.grandTotal <= 15000) {
        if (this.code == "RKM10") {
          this.msg = "discountof 10%";
          this.final1 = this.grandTotal - this.grandTotal * 0.1
        }
        else {
          this.msg = "not a valid coupon code"
        }

      }
      else if (this.grandTotal > 16000 && this.grandTotal < 30000) {
        if (this.code == "SRJ20") {
          this.msg = "discoun tof 20%"
          this.final1 = this.grandTotal - this.grandTotal * 0.2;
        } else {
          this.msg = "invalid coupon code"
        }
      }
      else if (this.grandTotal > 31000 && this.grandTotal < 50000) {
        if (this.code == "DEB15") {
          this.msg = "discount of 30%"
          this.final1 = this.grandTotal - this.grandTotal * 0.5
        }
        else {
          this.msg = "not a valid coupon code";
        }
      }
      else if (this.grandTotal > 51000 && this.grandTotal<100000) {
        if (this.code = "PAV30") {
          this.msg = "discount of 40%"
          this.final1 = this.grandTotal - this.grandTotal * 0.4
        }
        else {
          this.msg = "not a valid coupon code"
        }
      }

    }


  }
}
