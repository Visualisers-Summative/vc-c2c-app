<template>

    <div class="comment-container">
        <div class="post-comment">
            <h4>Post a Comment</h4>
            <textarea placeholder="Your comment here..." name="type-comment" id="" cols="60" rows="13"></textarea>
        </div>

        <div class="view-comment">
            <div class="mock-comment">
                <img src="../assets/images/c.png" alt="">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eum ab impedit, a quibusdam explicabo magnam soluta consequatur deleniti perspiciatis tenetur rem nam. Harum recusandae debitis perferendis itaque, natus nisi.</p>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
    .comment-container{
       display: flex;
       
       .post-comment{
        // width: 500px;
        // height: 202px;
        // border: 1px solid;
       }

       .view-comment{
        display: flex;
       }
       
    }
</style>