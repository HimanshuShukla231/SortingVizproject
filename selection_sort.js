function Selection_sort()
{
  document.getElementById('Time_Worst').innerText = "O(N^2)";
  document.getElementById('Time_Average').innerText = "O(N^2)";
  document.getElementById('Time_Best').innerText = "O(N^2)";

  document.getElementById('Space_Worst').innerText  ="O(1)";

  c_delay =0;
  for(var i =0; i<array_size-1;i++)
  {
    div_update(divs[i], div_sizes[i], "blue");
    index_min = i;
    for(var j = i+1; j<array_size;j++)
    {
      div_update(divs[j],div_sizes[j],"yellow");
      if(div_sizes[index_min]>div_sizes[j]){
        if(index_min!=i)
        {
            div_update(divs[index_min],div_sizes[index_min],"red");
        }
        index_min = j;
        div_update(divs[index_min],div_sizes[index_min],"blue");
      }
      else{
        div_update(divs[j],div_sizes[j],"red");
      }
    }
      if(index_min!=i)
      {
        var temp = div_sizes[index_min];
        div_sizes[index_min] = div_sizes[i];
        div_sizes[i] = temp;

        div_update(divs[index_min],div_sizes[index_min],"blue");
        div_update(divs[i],div_sizes[i],"blue");
        div_update(divs[index_min],div_sizes[index_min],"red");
      }
      div_update(divs[i], div_sizes[i] ,"Green");
    }
    div_update(divs[i], div_sizes[i] ,"Green");
    enable_buttons();
  }