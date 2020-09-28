<template>
	<div>
		<div class="row" id="container-form-search">
    		<div class="col-12 col-md-3" v-if="options.button.visibility.start_date">
      			<div class="form-group">
        			<!-- <input type="date" v-model="options.query.start_date" class="form-control" placeholder="Fecha de inicio" autocomplete="off"> -->
              <date-picker v-model="options.query.start_date" :config="options_date_picker" autocomplete="off" @dp-change="changeDate('start_date')"></date-picker>
      			</div>
    		</div>
    		<div class="col-12 col-md-3" v-if="options.button.visibility.end_date">
      			<div class="form-group">
        			<!-- <input type="date" v-model="options.query.end_date" class="form-control" placeholder="Fecha de fin" autocomplete="off"> -->
              <date-picker v-model="options.query.end_date" :config="options_date_picker" autocomplete="off" @dp-change="changeDate('end_date')"></date-picker>
      			</div>
    		</div>
    		<div class="col-12 col-md-6">
    			<button type="submit" class="btn btn-primary" ref="submitButton">Buscar</button>
          &nbsp;
          <button type="reset-no" class="btn btn-outline-primary" @click="resetFormFilter(this)">Limpiar filtro</button>
    		</div>
  		</div>
    </div>
</template>

<script>
import datePicker from 'vue-bootstrap-datetimepicker';
// import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
export default {
    name: 'searchContentHeader',
    components: {
      datePicker
  	},
    data () {
	    return {
	      /* query: {
	    		start_date: '',
	    		end_date: ''
	    	} */
        // date: new Date(),
        options_date_picker: {
          // format: 'DD/MM/YYYY',
          format: 'YYYY',
          useCurrent: false,
          locale: 'es'
        } 
	    }
  	},
  	props: ['options'],
    methods: {
      resetFormFilter(event) {
        let dates = this.dateStartEnd();
        this.options.query.start_date = dates.start_date;
        this.options.query.end_date = dates.end_date;
        this.$refs.submitButton.click();
      },
      dateStartEnd(type = 'year') {
        // FORMAT DATE
        let start_date = '',
          end_date = '';

        if (this.options.query.start_date == '' && this.options.query.end_date == '') {
          let date = new Date(),
            date_month = date.getMonth() + 1,
            date_day = date.getDate(),
            date_year = date.getFullYear();
          
          if (date_day < 10) {
            date_day = '0' + date_day;
          }
          
          if (date_month < 10) {
            date_month = '0' + date_month;
          }

          // start_date = date_year-2 + '-01-01';
          start_date = date_year-2 + '-' + date_month + '-01T12:00:00Z';
          end_date = date_year + '-12-31';
        }

        else {
          start_date = this.options.query.start_date;
          end_date = this.options.query.end_date;
        }
        // !FORMAT DATE

        /* switch(type) {
          case 'year':
            // start_date = new Date((date_year-2) + '-01-01T12:00:00Z');
            // end_date = new Date(date_year + '-02-31T12:00:00Z');
            start_date = date_year-2 + '-01-01';
            end_date = date_year + '-12-31';
          break;

          case 'month':
            // start_date = new Date((date_year-2) + '-01-01T12:00:00Z');
            // end_date = new Date(date_year + '-' + date_month + '-31');
            start_date = date_year-2 + '-' + date_month + '-01';
            end_date = date_year + '-' + date_month + '-31';
          break;
        } */

        return {
          /* start_date: new Date((date_year-2) + '-' + date_month + '-' + date_day),
          end_date: new Date(date_year + '-' + date_month + '-' + date_day) */
          /* start_date: start_date,
          end_date: end_date */
          start_date: new Date(start_date),
          end_date: new Date(end_date)
        }
      },
      changeDate(type_input) {
        // FORMAT DATE
        let date = new Date(),
          date_month = date.getMonth() + 1,
          date_day = date.getDate(),
          date_year = date.getFullYear(),
          start_date = '',
          end_date = '';
        
        if (date_day < 10) {
          date_day = '0' + date_day;
        }
        
        if (date_month < 10) {
          date_month = '0' + date_month;
        }
        // !FORMAT DATE

        if (this.options.tab == undefined) {
          this.options.tab = {
            period: ''
          }
        }

        if ($('ul.nav li.nav-item a[href="#tab-year"]').hasClass('active') || this.options.tab.period == 'year') {
          this.options_date_picker.format = 'YYYY';

          if (type_input == 'start_date' && this.options.query.start_date.length == 4) {
            // this.options.query.start_date = this.options.query.start_date + '-01-01';
            this.options.query.start_date = new Date(this.options.query.start_date + '-' + date_month + '-01T12:00:00Z');
          }

          if (type_input == 'end_date' && this.options.query.end_date.length == 4) {
            this.options.query.end_date = new Date(this.options.query.end_date + '-12-31');
          }

          //

          if (type_input == 'start_date' && this.options.query.start_date.length == 7) {
            this.options.query.start_date = this.options.query.start_date + '-01';
          }

          if (type_input == 'end_date' && this.options.query.end_date.length == 7) {
            let date = new Date(),
              date_tmp = this.options.query.end_date.split('-'),
              // first_date = new Date(date.getFullYear(), date.getMonth(), 1),
              last_date = new Date(date_tmp[0], parseInt(date_tmp[1])/* + 1*/, 0)/*,
              dates = this.dateStartEnd('month')*/;

            this.options.query.end_date = new Date(this.options.query.end_date + '-' + last_date.getDate());
          }
        }

        if ($('ul.nav li.nav-item a[href="#tab-month"]').hasClass('active') || this.options.tab.period == 'month') {
          this.options_date_picker.format = 'YYYY-MM';

          if (type_input == 'start_date' && this.options.query.start_date.length == 4) {
            this.options.query.start_date = new Date(this.options.query.start_date + '-' + date_month + '-01T12:00:00Z');
          }

          if (type_input == 'end_date' && this.options.query.end_date.length == 4) {
            this.options.query.end_date = new Date(this.options.query.end_date + '-12-31');
          }

          //

          if (type_input == 'start_date' && this.options.query.start_date.length == 7) {
            this.options.query.start_date = this.options.query.start_date + '-01';
          }

          if (type_input == 'end_date' && this.options.query.end_date.length == 7) {
            let date = new Date(),
              date_tmp = this.options.query.end_date.split('-'),
              // first_date = new Date(date.getFullYear(), date.getMonth(), 1),
              last_date = new Date(date_tmp[0], parseInt(date_tmp[1])/* + 1*/, 0)/*,
              dates = this.dateStartEnd('month')*/;

            this.options.query.end_date = new Date(this.options.query.end_date + '-' + last_date.getDate());
          }
        }
      }
  	},
  	computed: {
  	},
  	created() {
      /* let date = new Date(),
        date_month = date.getMonth() + 1,
        date_day = date.getDate(),
        date_year = date.getFullYear();
      
      if (date_day < 10) {
        date_day = '0' + date_day;
      }
      
      if (date_month < 10) {
        date_month = '0' + date_month;
      }

      this.options.query.start_date = (date_year-2) + '-' + date_month + '-' + date_day;
      this.options.query.end_date = date_year + '-' + date_month + '-' + date_day; */
      let dates = this.dateStartEnd();

      this.options.query.start_date = (this.options.query.start_date != '') ? this.options.query.start_date : dates.start_date;
      this.options.query.end_date = (this.options.query.end_date != '') ? this.options.query.end_date : dates.end_date;

      if (this.options.date_picker != undefined) {
        $.extend(this.options_date_picker, this.options.date_picker);
      }
  	},
  	watch: {
      options: {
        immediate: true, 
        handler(val, oldVal) {
          let self = this;

          self.options.button = (self.options.button == undefined) ? {} : self.options.button;

          if (self.options.button.visibility == undefined) {
            self.options.button.visibility = {
              start_date: true,
              end_date: true,
            };
          }

          self.options.date_picker = (self.options.date_picker == undefined) ? {} : self.options.date_picker;

          if (self.options.date_picker.format != undefined) {
            self.options_date_picker.format = self.options.date_picker.format;
          }
        }
      }
  	},
  	mounted() {
      let self = this;
      $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(event) {
        event.preventDefault();
        let target = $(event.target).attr('href'),
          dates = {};
        switch(target) {
          case '#tab-year':
            dates = self.dateStartEnd('year');

            self.options_date_picker.format = 'YYYY';
            self.options.query.start_date = dates.start_date;
            self.options.query.end_date = dates.end_date;
          break;

          case '#tab-month':
            dates = self.dateStartEnd('month');

            self.options_date_picker.format = 'YYYY-MM';
            self.options.query.start_date = dates.start_date;
            self.options.query.end_date = dates.end_date;
          break;
        }
      });

      /* $(document).on('changeDate keyup', '#container-form-search .form-control', function(event) {
        var fecha = $(this).val();
        alert(fecha);
        if ($('ul.nav li.nav-item a[href="#tab-year"]').hasClass('active')) {
          self.options_date_picker.format = 'YYYY';
          self.options.query.start_date = self.dateStartEnd('year').start_date;
          self.options.query.end_date = self.dateStartEnd('year').end_date;
        }

        if ($('ul.nav li.nav-item a[href="#tab-month"]').hasClass('active')) {
          self.options_date_picker.format = 'YYYY-MM';
          self.options.query.start_date = self.dateStartEnd('month').start_date;
          self.options.query.end_date = self.dateStartEnd('month').end_date;
        }
      }); */
  	}
}
</script>

<style>
</style>